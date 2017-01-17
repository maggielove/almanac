// 'use strict';

var HtmlWebpackPlugin = require('html-webpack-plugin');
var HTMLWebpackPluginConfig = new HtmlWebpackPlugin({
  template: __dirname + '/index.html',
  filename: 'index.html',
  inject: 'body'
});

module.exports = {
  entry: [
    './js/components/almanac.js'
  ],
  output: {
    path: __dirname + '/dist',
    filename: "almanac_bundle.js"
 },
  module: {
    loaders: [
      { test: /\.js$/, exclude: /node_modules/, loader: "babel-loader"},
      {test: /\.scss$/, loaders: ["style", "css", "sass"]}
  ],
  resolve: {
      extension: ['', '.js', '.jsx']
    }
  },
  plugins: [HTMLWebpackPluginConfig]
};
