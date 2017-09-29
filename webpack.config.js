const webpack = require('webpack');
const path = require('path');

module.exports = {
  entry: [path.join(__dirname, 'src', 'app-client.js')],
  resolve: {
    extensions: ['', '.js', '.jsx', '.scss'],
    alias: {
        //'es6-promise': path.join(folders.NPM, 'es6-promise', 'es6-promise.js'),
        //'fetch': path.join(folders.NPM, 'whatwg-fetch', 'fetch.js'),
    }
},
  output: {
    path: path.join(__dirname, 'src', 'static', 'js'),
    filename: 'bundle.js'
  },
  module: {
    loaders: [{
      test: path.join(__dirname, 'src'),
      loader: ['babel-loader'],
      query: {
        cacheDirectory: 'babel_cache',
        presets: ['react', 'es2015']
      }
    }]
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV)
    }),
    new webpack.ProvidePlugin({
          // Promise: 'imports?this=>global!exports?global.Promise!es6-promise'
          // fetch: 'imports?this=>global!exports?global.fetch!whatwg-fetch'
    }),
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.optimize.UglifyJsPlugin({
      compress: { warnings: false },
      mangle: true,
      sourcemap: false,
      beautify: false,
      dead_code: true
    })
  ]
};
