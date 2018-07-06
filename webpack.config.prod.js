const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const merge = require('webpack-merge');
const common = require('./webpack.config');

module.exports = merge(common, {

  entry: [
    path.join(__dirname, 'src', 'spinnerContainer', 'index.js'),
  ],
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'spinner-container.js',
    publicPath: '/',
    libraryTarget: 'umd',
  },
  module: {
    rules: [
        {
            test: /\.css$/,
            use:['style-loader','css-loader']
          }
    ],
  },
  externals: ['react-dom', 'react'],

});