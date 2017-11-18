const path = require('path');

module.exports = {
  module: {
    rules: [
      {
        test: /\.scss$/,
        loaders: [
          "style-loader",
          "css-loader",
          "sass-loader",
          "postcss-loader"
        ],
        include: path.resolve(__dirname, '../')
      }
    ]
  }
}
