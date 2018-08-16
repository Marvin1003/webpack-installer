"use strict";

var BundleAnalyzerPlugin = require("webpack-bundle-analyzer").BundleAnalyzerPlugin;

module.exports = function (_ref) {
  var type = _ref.type;
  return {
    plugins: [new BundleAnalyzerPlugin(type)]
  };
};