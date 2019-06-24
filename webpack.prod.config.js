const path = require('path');
const merge = require('webpack-merge');
const core = require('./webpack.core.config');
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const TerserJSPlugin = require('terser-webpack-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');

module.exports = merge(core, {
  mode: 'production',
  entry: {
    'spinner-container': './index.js'
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].bundle.js',
    publicPath: '/',
    library: 'spinnerContainer',
    libraryTarget: 'umd'
  },
  externals: [
    'react-dom',
    'react',
    'prop-types'
  ],
  devtool: "source-map",
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          "style-loader", //2. Inject styles into DOM
          "css-loader", //1. Turns css into commonjs
        ]
      }
    ]
  },
  plugins: [
    new CleanWebpackPlugin()
  ],
  optimization: {
    minimizer: [
      new TerserJSPlugin({ sourceMap: true }),
      new OptimizeCSSAssetsPlugin({})
    ]
  }
});