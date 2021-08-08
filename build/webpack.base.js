const path = require('path');
const htmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const autoprefixer = require('autoprefixer');

const rootDir = process.cwd();

module.exports = {
  context: rootDir,
  entry: path.resolve(rootDir, './src/index.js'),
  output: {
    path: path.resolve(rootDir, './dist'),
    filename: 'bundle.[contenthash:8].js'
  },
  module: {
    rules: [
      {
        test: /\.(le|c)ss$/,
        use: ['style-loader', 'css-loader', 'less-loader', 'postcss-loader'],
        include: path.resolve(rootDir, './src'),
        exclude: /node_modules/ // 排除node_modules
      },
      {
        test: /\.(jsx|js)$/,
        use: 'babel-loader',
        include: path.resolve(rootDir, './src'),
        exclude: /node_modules/ // 排除node_modules
      }
    ]
  },
  plugins: [
    new htmlWebpackPlugin({
      template: path.resolve(rootDir, './public/index.html'),
      inject: 'body',
      scriptLoading: 'blocking'
    }),
    new CleanWebpackPlugin()
  ]
};
