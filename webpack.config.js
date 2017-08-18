const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const merge = require('webpack-merge');

const parts = require('./webpack.parts.js');

const PATHS = {
  app: path.join(__dirname, 'src/app'),
  build: path.join(__dirname, 'dist')
};

const common = merge([
  {
    entry: {
      app: PATHS.app + '/index.jsx'
    },
    output: {
      path: PATHS.build,
      filename: 'bundle.js'
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: 'index.html'
      }),
    ],
  },
]);

module.exports = function(env) {
  if (env === 'prod') {
    return merge([
      common,
      parts.clean(PATHS.build),
      parts.loadJavascript(PATHS.app),
      parts.lintJavascript({paths: PATHS.app}),
      parts.generateSourcemaps({type: 'source-map'}),
      parts.extractCSS(PATHS.app)
    ]);
  }

  return merge([
    common,
    parts.loadCSS(PATHS.app),
    parts.loadJavascript(PATHS.app),
    parts.lintJavascript({paths: PATHS.app}),
    parts.generateSourcemaps({type: 'cheap-module-eval-source-map'}),
    parts.devServer({
      host: process.env.HOST,
      port: process.env.PORT
    })
  ]);
}
