const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

exports.clean = function(path) {
  return {
    plugins: [
      new CleanWebpackPlugin([path])
    ]
  }
};

exports.devServer = function(options) {
  return {
    devServer: {
      historyApiFallback: true,
      hot: true,
      hotOnly: true,
      stats: 'errors-only',
      host: options.host,
      port: options.port
    },
    plugins: [
      new webpack.HotModuleReplacementPlugin({})
    ]
  }
};

exports.loadCSS = function(paths) {
  return {
    module: {
      rules: [
        {
          test: /\.scss$/,
          include: paths,
          use: ['style-loader', 'css-loader', 'resolve-url-loader', 'sass-loader']
        }
      ]
    }
  }
};

exports.extractCSS = function(paths) {
  return {
    plugins: [
      new ExtractTextPlugin({
        filename: 'bundle.css'
      })
    ],
    module: {
      rules: [
        {
          test: /\.scss$/,
          include: paths,
          use: ExtractTextPlugin.extract({
            fallback: 'style-loader',
            use: ['css-loader', 'resolve-url-loader', 'sass-loader']
          })
        }
      ]
    }
  }
};

exports.loadJavascript = function(paths) {
  return {
    module: {
      rules: [
        {
          test: /\.(jsx|js)$/,
          include: paths,
          use: {
            loader: 'babel-loader',
            options: {
              //enable caching for enhanced performance during development
              cacheDirectory: true
            }
          }
        }
      ]
    }
  }
};

exports.lintJavascript = function({paths, options}) {
  return {
    module: {
      rules: [
        {
          test: /\.js$/,
          include: paths,
          enforce: 'pre',
          loader: 'eslint-loader',
          options: options
        }
      ]
    }
  }
};

exports.generateSourcemaps = function({type}) {
  return {
    devtool: type
  }
};
