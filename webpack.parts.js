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
              cacheDirectory: true,
              presets: ['react', 'es2015']
            }
          }
        }
      ]
    }
  }
};
