/*
 * @Author: Yuk¡¤
 * @Date:   2016-09-25 14:02:52
 * @Last Modified by:   yukyuk
 * @Last Modified time: 2016-10-07 11:53:35
 */

'use strict';
var webpackMerge = require('webpack-merge');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var commonConfig = require('./webpack.common.js');
var helpers = require('./helpers');
var open = require('open');

module.exports = webpackMerge(commonConfig, {
  devtool: 'cheap-module-eval-source-map',
  // 'content-base': '/public',
  output: {
    path: helpers.root('dist'),
    publicPath: 'http://localhost:8080/',
    filename: '[name].js',
    chunkFilename: '[id].chunk.js'
  },

  plugins: [
    new ExtractTextPlugin('[name].css')
  ],

  devServer: {
    historyApiFallback: true,
    stats: 'minimal'
  }
});

open('http://localhost:8080/webpack-dev-server/');
