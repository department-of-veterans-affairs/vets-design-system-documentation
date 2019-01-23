const path = require('path');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  entry: "./webpack/entry.js",
  output: {
    path: path.resolve(__dirname, 'src/vendor/javascripts/'),
    filename: "bundle.js"
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /(node_modules)/,
        loader: "babel-loader",
        query: {
          presets: ["react", "es2015"]
        }
      },
    ]
  },

};
