const { merge } = require('webpack-merge');
const baseconfig = require('./webpack.base');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

console.log(`process.env.NODE_ENV:`, process.env.NODE_ENV);

module.exports = merge(baseconfig, {
  mode: 'production',
  devtool: 'hidden-source-map',
  plugins: [new CleanWebpackPlugin()],
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
