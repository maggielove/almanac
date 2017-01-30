var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var HTMLWebpackPluginConfig = new HtmlWebpackPlugin({
  template: __dirname + '/src/index.html',
  filename: 'index.html',
  inject: 'body'
});

module.exports = {
  entry:  ['./src/almanac.js'],
  output: {
    path: __dirname + '/dist/src/',
    filename: 'almanac_bundle.js'
},
 module: {
     loaders: [
         {
             test: /\.js$/,
             exclude: /node_modules/,
             loader: "babel-loader"
         }
     ]
 },
  plugins: [HTMLWebpackPluginConfig]
}
