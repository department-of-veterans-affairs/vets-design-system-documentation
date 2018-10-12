const path = require('path');

module.exports = {
  entry: "./webpack/entry.js",
  output: {
    path: path.resolve(__dirname, 'src/assets/javascripts/'),
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
    }
    ]
  }
};
