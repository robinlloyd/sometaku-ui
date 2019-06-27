const path = require('path')

module.exports = {
  entry: {
    app: ['./demo/index.js']
  },
  output: {
    path: path.resolve(__dirname, 'demo'),
    publicPath: '/dist/',
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.(js)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react']
          }
        }
      }
    ]
  },
  devServer: {
    watchOptions: {
      poll: 1000
    },
    disableHostCheck: true,
    historyApiFallback: {
      index: 'index.html'
    },
    port: 9000
  }
}
