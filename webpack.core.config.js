// Core/base webpack config (to be combined with prod or dev config
module.exports = {
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
              plugins: [
                [
                  "emotion",
                  {
                    "sourceMap": true
                  }
                ],
                '@babel/plugin-proposal-class-properties'
              ]
            }
          },
          'eslint-loader'
        ]
      }
    ]
  }
};