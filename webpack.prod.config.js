const path = require('path');
const merge = require('webpack-merge');
const core = require('./webpack.core.config');
const TerserJSPlugin = require('terser-webpack-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');

module.exports = merge(core, {
  entry: {
    'spinner-container': [
      path.join(__dirname, '/index.js')
    ]
  },
  output: {
    path: path.join(__dirname, 'dist'),
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
  mode: 'production',
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          { loader: 'style-loader' },
          { loader: 'css-loader' }
        ]
      }
    ]
  },
  optimization: {
    minimizer: [new TerserJSPlugin({}), new OptimizeCSSAssetsPlugin({})],
  },
  resolve: {
    extensions: ['*', '.js', '.jsx']
  }
});