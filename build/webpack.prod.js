const { merge } = require('webpack-merge');
const baseconfig = require('./webpack.base');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const CompressionPlugin = require('compression-webpack-plugin');
console.log(`process.env.NODE_ENV:`, process.env.NODE_ENV);

module.exports = merge(baseconfig, {
  mode: 'production',
  devtool: 'hidden-source-map',
  plugins: [
    new CleanWebpackPlugin(),
    new CompressionPlugin({
      algorithm: 'gzip',
      test: /\.(js|css|html|svg)$/, // 压缩 js, css, html, 和 svg 文件
      threshold: 8, // 只处理大于这个大小的文件
      minRatio: 0.8 // 压缩比例阈值
    })
  ],
  cache: {
    type: 'filesystem',
    buildDependencies: {
      config: [__filename]
    },
    version: 'new_version'
  },
  optimization: {
    splitChunks: {
      // 这个在 mode: production 时是默认开启的，但是默认情况下只会对按需加载的代码进行分割。如果我们要对一开始就加载的代码也做分割处理，就要进行如下配置
      chunks: 'all'
    }
  }
});
