'use strict';

const { resolve } = require('path')

module.exports = {
  entry: './app/main',
  output: {
    path: __dirname,
    filename: './public/bundle.js'
  },
  context: __dirname,
  devtool: 'source-map',
  resolve: {
    extensions: ['.js', '.jsx']
  },
  module: {
    loaders: [
      {
        test: /jsx?$/,
        include: resolve(__dirname, './app'),
        loader: 'babel-loader',
        query: {
          presets: 'react'
        }
      }
    ]
  }
};
