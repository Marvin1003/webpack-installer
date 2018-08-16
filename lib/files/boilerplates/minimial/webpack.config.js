"use strict";

var path = require("path");
var webpackMerge = require("webpack-merge");

var stats = require("./webpack-utils/stats");
var loadPresets = require("./webpack-utils/presets/loadPresets");

var modeConfig = function modeConfig(_ref) {
  var mode = _ref.mode,
      port = _ref.port;
  return require("./webpack-utils/configs/webpack." + mode)({ mode: mode, port: port });
};

module.exports = function (_ref2) {
  var _ref2$mode = _ref2.mode,
      mode = _ref2$mode === undefined ? "production" : _ref2$mode,
      _ref2$presets = _ref2.presets,
      presets = _ref2$presets === undefined ? [] : _ref2$presets,
      _ref2$type = _ref2.type,
      type = _ref2$type === undefined ? "" : _ref2$type,
      _ref2$port = _ref2.port,
      port = _ref2$port === undefined ? 3000 : _ref2$port;
  return webpackMerge({
    mode: mode,
    stats: stats,
    module: {
      rules: [{
        test: /\.js$/,
        include: path.resolve(__dirname, "src"),
        use: {
          loader: "babel-loader",
          options: {
            presets: ["env"]
          }
        }
      }]
    }
  }, modeConfig({ mode: mode, port: port }), loadPresets({ mode: mode, presets: presets, type: type }));
};