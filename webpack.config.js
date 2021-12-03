const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  entry: "./webpack/entry.js",
  mode: "production",
  output: {
    path: path.resolve(__dirname, "src/vendor/javascripts/"),
    filename: "bundle.js"
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /(node_modules)/,
        loader: "babel-loader",
        options: {
          presets: ["react", "es2015"]
        }
      }
    ]
  }
};
