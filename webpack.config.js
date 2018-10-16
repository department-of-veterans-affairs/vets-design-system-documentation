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
      {
        test: /\.(sa|sc|c)ss$/,

        use: [
            {
              loader: MiniCssExtractPlugin.loader,
              options: {
                publicPath: "",
              }
            },
            'css-loader',
            'sass-loader',
        ]
      },

      {
        test: /\.(woff|woff2|eot|ttf)$/,
        loader: 'url-loader?limit=10&name=../fonts/[name].[ext]',
      },
      {
        test: /\.(png|svg)$/,
        loader: 'url-loader?limit=10&name=../img/[name].[ext]',
      },
    ]
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: '../css/app.css',
      chunkFilename: '../css/[id].css',
    })
  ]
};
