const path = require('path');
const common = require('./webpack.common');
const merge = require('webpack-merge');

module.exports = merge(common, {
  mode: 'development',
  output: {
    path: path.resolve('dist'),
    filename: '[name].bundle.js',
  },
  module: {
    rules: [],
  },
});
