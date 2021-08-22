const path = require('path');
const htmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCssPlugin = require('optimize-css-assets-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const TinyimgPlugin = require('tinyimg-webpack-plugin');
const rootDir = process.cwd(); // 项目根目录

module.exports = {
  context: rootDir,
  entry: path.resolve(rootDir, './src/index.js'),
  output: {
    path: path.resolve(rootDir, './dist'),
    filename: './js/bundle.[contenthash:8].js'
  },
  module: {
    rules: [
      {
        test: /\.(png|jpg|gif|jpeg|svg)$/,
        type: 'asset',
        parser: {
          dataUrlCondition: {
            maxSize: 1372125 // 1.3M - 1字节
          }
        },
        generator: {
          filename: './img/[name].[contenthash:8].[ext]'
        }
      },
      // {
      //   test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
      //   use: [
      //     {
      //       loader: 'url-loader',
      //       options: {
      //         limit: 1372125, // 1.3M - 1字节
      //         name: './img/[name].[contenthash:8].[ext]'
      //       }
      //     }
      //   ],
      //   include: path.resolve(rootDir, './src/assets'),
      //   exclude: /node_modules/ // 排除node_modules
      // },
      {
        test: /\.(le|c)ss$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader', 'less-loader', 'postcss-loader'],
        include: path.resolve(rootDir, './src/css'),
        exclude: /node_modules/ // 排除node_modules
      },
      {
        test: /\.(jsx|js)$/,
        use: ['thread-loader', 'babel-loader?cacheDirectory=true'], // 缓存
        // use: ['thread-loader', 'babel-loader'],  // 无缓存
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
    new MiniCssExtractPlugin({
      filename: './css/[name].[contenthash:8].css'
    }),
    new OptimizeCssPlugin(),
    new CopyWebpackPlugin({
      patterns: [
        {
          context: path.resolve(rootDir, './public/lib'),
          from: '*.js',
          to: path.resolve(rootDir, './dist/lib')
        }
      ]
    }),
    new TinyimgPlugin({
      enabled: process.env.NODE_ENV === 'production', //仅生产环境可用
      logged: true
    })
  ]
};
