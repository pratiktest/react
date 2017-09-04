var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

var HtmlWebpackPluginConfig = new HtmlWebpackPlugin({
  template: __dirname + '/public/index.html',
  filename: 'index.html',
  inject: 'body'
});

var ExtractTextPluginConfig = new ExtractTextPlugin('style.css');

var entrypoint = './source/client.js';

module.exports = {
  entry: entrypoint,
  output: {
    path: __dirname + '/public',
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        include: __dirname + '/source',
        loader: 'babel-loader',
        query: {
          presets: ['es2015', 'react']
        }
      },
      {
        test: /\.scss$/,
        include: __dirname + '/app',
        loader: ExtractTextPlugin.extract('css!sass')
      }
    ]
  },
  devServer: {
    contentBase: "./app",
    port: 4000,
    inline: true
  },

  plugins: [HtmlWebpackPluginConfig, ExtractTextPluginConfig]
}
