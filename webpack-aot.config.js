'use strict';
const path = require('path');
const webpackConfig = require('./webpack.config.js');
const loaders = require('./webpack/loaders');
const AotPlugin =  require('@ngtools/webpack').AotPlugin;

webpackConfig.module.rules = [
  loaders.tslint,
  loaders.ts,
  loaders.html,
  loaders.vendorCss,
  loaders.appCss,
  loaders.file,
];

webpackConfig.plugins = webpackConfig.plugins.concat([
  new AotPlugin({
    tsConfigPath: path.join(__dirname, './tsconfig-aot.json'),
    mainPath: path.join(__dirname, 'src', 'main.ts'),
    entryModule: path.join(__dirname, 'src', 'app', 'app.module#AppModule'),
  }),
]);

module.exports = webpackConfig;
