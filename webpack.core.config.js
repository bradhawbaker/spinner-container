// Core/base webpack config (to be combined with prod or dev config
module.exports = {
  devtool: 'source-map',
  resolve: {
    extensions: ['*', '.js', '.jsx']
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        use: ["source-map-loader"],
        enforce: "pre"
      },
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
        test: /\.(ttf|eot|otf)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[ext]',
              outputPath: 'dist/images'
            }
          }
        ],
        exclude: /node_modules/
      },
      {
        test: /\.svg/,
        use: {
          loader: 'svg-url-loader', // for importing svg images in css
          options: {}
        }
      },
      {
        test: /\.(png|jpg)(\?.*)?$/,
        loader: 'url-loader',
        options: {},
        exclude: /node_modules/
      }
    ]
  }
};