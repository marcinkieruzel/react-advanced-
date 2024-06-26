const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const ModuleFederationPlugin =
  require("webpack").container.ModuleFederationPlugin;

const deps = Object.keys(require("./package.json").dependencies);
console.log(deps);

const singletonDeps = {};


for(let dep of deps) {
  singletonDeps[dep] = {singleton: true}
}

console.log(singletonDeps)

module.exports = {
  mode: "production",
  entry: "./src/index.js",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "[name].bundle.js",
  },
  devServer: {
    port: 3004,
    hot: true,
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: "./public/index.html",
    }),
    new ModuleFederationPlugin({
      name: "remote",
      filename: "remoteEntry.js",
      exposes: {
        "./Hello": "./src/index.js",
      },
      shared: singletonDeps,
    }),
  ],
};
