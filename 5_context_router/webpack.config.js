const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

const ModuleFederationPlugin =
  require("webpack").container.ModuleFederationPlugin;

const deps = Object.keys(require("./package.json").dependencies);
const versions = require("./package.json").dependencies;
console.log(deps);

const singletonDeps = {};

for (let dep of deps) {
  singletonDeps[dep] = {
    singleton: true,
    // eager: true,
    // requiredVersion: versions[dep],
  };
}

console.log(singletonDeps);

module.exports = {
  entry: "./src/index.tsx",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js",
    publicPath: "/",
  },
  resolve: {
    extensions: [".js", ".jsx", ".ts", ".tsx"],
  },
  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/,
        exclude: /node_modules/,
        use: "babel-loader",
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
      remotes: {
        remote: "remote@http://localhost:3333/remoteEntry.js",
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
    port: 3000,
    headers: {
      "Access-Control-Allow-Origin": "*",
    },
  },
};
