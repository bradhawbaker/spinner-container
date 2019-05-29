// Core/base webpack config (to be combined with prod or dev config
const path = require('path');
module.exports = {
  resolve: {
    extensions: ['*', '.js', '.jsx']
  },
  output: {
    filename: 'spinnercontainer.bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              presets: ['@babel/preset-env', '@babel/preset-react'],
              plugins: ['@babel/plugin-proposal-class-properties']
            }
          },
          'eslint-loader'
        ]
      },
      {
        test: /\.(jpe?g|png|gif|svg)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[ext]',
              outputPath: 'dist/images'
            }
          }
        ],
        exclude: /node_modules/,
      }
    ]
  }
};