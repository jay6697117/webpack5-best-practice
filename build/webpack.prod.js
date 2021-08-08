const { merge } = require('webpack-merge');
const baseconfig = require('./webpack.base');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

console.log(`process.env.NODE_ENV:`, process.env.NODE_ENV);

module.exports = merge(baseconfig, {
  mode: 'production',
  devtool: 'hidden-source-map',
  plugins: [new CleanWebpackPlugin()]
});
