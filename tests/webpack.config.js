
'use strict';

/**
 * Module dependencies
 */
var path            = require('path'),
  webpack           = require('webpack');

module.exports = {

  cache: true,

  entry: {
    'bundle.tests': './www/tests/main'
  },

  output: {
    path          : 'www',
    filename      : '[name].js',
    chunkFilename : '[chunkhash].js'
  },

  module: {

    loaders: [{
      test   : /[\/]\.js$/,
      loader : 'exports?ionic'
    }]
  },

  resolve: {
    root: [
      path.join(__dirname, 'tests'),
      path.join(__dirname, 'node_modules'),
    ],
    alias: {
    }
  },

  plugins: [
    // new webpack.ResolverPlugin(
    //   new webpack.ResolverPlugin.DirectoryDescriptionFilePlugin(
    //     'bower.json', ['main'])
    // ),
    // new webpack.DefinePlugin({
    //   'process.env': {
    //     // This has effect on the react lib size
    //     'NODE_ENV': JSON.stringify('production')
    //   }
    // }),
    // new HtmlWebpackPlugin({
    //   pkg      : require('./package.json'),
    //   template : 'app/entry-template.html',
    // })
    // new webpack.optimize.DedupePlugin(),
    // new webpack.optimize.UglifyJsPlugin()
    // new webpack.BannerPlugin(banner, options),
    // new webpack.optimize.DedupePlugin()
  ]

};