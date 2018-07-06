var path = require('path');
module.exports = {
  ententry: [
    path.join(__dirname, 'src','spinnerContainer', 'index.js'),
  ],
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'spinnerBundle.js',
    libraryTarget: 'umd'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        include: path.resolve(__dirname, 'src'),
        exclude: /(node_modules|bower_components|dist)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['env']
          }
        }
      },
      {
        test: /\.css$/,
        use:['style-loader','css-loader']
      }
    ]
  },
  externals: {
    'react': 'commonjs react' // this line is just to use the React dependency of our parent-testing-project instead of using our own React.
  }
};