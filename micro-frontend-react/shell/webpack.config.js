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
  mode: "development",
  entry: "./src/index.js",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "[name].bundle.js",
  },
  module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: /(node_modules)/,
        use: {
          // `.swcrc` can be used to configure swc
          loader: "swc-loader",
        },
      },
    ],
  },
  devServer: {
    port: 3003,
    hot: true,
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./public/index.html",
    }),
    new ModuleFederationPlugin({
      remotes: {
        remote: "remote@http://localhost:3004/remoteEntry.js",
      },
      shared: singletonDeps,
    }),
  ],

  // module: {
  //     rules: [
  //     {
  //         test: /\.m?js$/,
  //         exclude: /(node_modules)/,
  //         use: {
  //         // `.swcrc` can be used to configure swc
  //         loader: "swc-loader",
  //         },
  //     },
  //     ],
  // },
  // devServer: {
  //     port: 3003,
  //     open: true,
  //     hot: true,
  // },
  // plugins: [
  //     new HtmlWebpackPlugin({
  //     template: "./public/index.html",
  //     }),
  //     new ModuleFederationPlugin({
  //     name: "rct",
  //     filename: "remoteEntry.js",
  //     exposes: {
  //         "./RCTinit": "./src/index.js",
  //         "./RCTapp": "./src/load.js"
  //     },
  //     shared: ["@faker-js/faker"],
  //     }),
  // ],
};
