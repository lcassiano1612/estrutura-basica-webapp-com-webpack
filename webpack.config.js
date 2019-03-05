const path = require('path')
const htmlWebpackPlugin = require('html-webpack-plugin')
const webpack = require('webpack')
module.exports = {
  mode: 'development',
  devServer: {
    contentBase: path.resolve(__dirname, 'public'),
    watchContentBase: true,
    hot: true,
    port: 3340
  },
  entry: path.resolve(__dirname, 'src', 'main.js'),
  module: {
    rules: [
      {
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
          presets: [
            '@babel/preset-env'
          ]
        },
        test: /\.js$/
      },
      {
        exclude: /node_modules/,
        test: /\.css$/,
        use: [
          { loader: 'style-loader'},
          {
            loader: 'css-loader',
            options: {
              modules: true
            }
          }
        ]
      }
    ]
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name]-[hash].js'
  },
  plugins: [
    new htmlWebpackPlugin({
      template: path.resolve(__dirname, 'public', 'index.html')
    }),
    new webpack.HotModuleReplacementPlugin()
  ],
  target: 'web'
}