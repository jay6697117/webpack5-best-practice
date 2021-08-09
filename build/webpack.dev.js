const { merge } = require('webpack-merge');
const baseconfig = require('./webpack.base');

console.log(`process.env.NODE_ENV:`, process.env.NODE_ENV);

module.exports = merge(baseconfig, {
  mode: 'development',
  devtool: 'eval-cheap-module-source-map',
  devServer: {
    open: true,
    host: '0.0.0.0',
    port: 8080,
    hot: true,
    proxy: {
      '/api': {
        target: 'http://localhost:3000',
        changeOrigin: true,
        pathRewrite: {
          '^/api': ''
        }
      }
    }
  },
  cache: {
    type: 'memory'
  }
});
