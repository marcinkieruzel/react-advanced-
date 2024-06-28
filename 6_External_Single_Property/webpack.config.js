const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

const ModuleFederationPlugin =
  require("webpack").container.ModuleFederationPlugin;

const deps = Object.keys(require("./package.json").dependencies);
console.log(deps);

const singletonDeps = {};

for (let dep of deps) {
  singletonDeps[dep] = { singleton: true };
}

console.log(singletonDeps);

module.exports = {
  entry: "./src/index.tsx",
  resolve: {
    extensions: [".js", ".jsx", ".ts", ".tsx"],
  },
  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/,
        exclude: /node_modules/,
        use: "ts-loader",
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./public/index.html",
    }),
    new ModuleFederationPlugin({
      name: "remote",
      filename: "remoteEntry.js",
      exposes: {
        "./SingleProperty": "./src/components/SingleProperty.tsx",
      },
      shared: {
        ...deps,
        react: { singleton: true, eager: true, requiredVersion: deps.react },
        "react-dom": {
          singleton: true,
          eager: true,
          requiredVersion: deps["react-dom"],
        },
        "react-router-dom": {
          singleton: true,
          eager: true,
          requiredVersion: deps["react-router-dom"],
        },
      },
    }),
  ],
  devServer: {
    static: {
      directory: path.join(__dirname, "public"),
    },
    historyApiFallback: true,
    compress: true,
    port: 3333,
    headers: {
      "Access-Control-Allow-Origin": "*",
    },
  },
};
