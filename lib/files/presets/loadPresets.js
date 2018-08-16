"use strict";

var _toConsumableArray2 = require("babel-runtime/helpers/toConsumableArray");

var _toConsumableArray3 = _interopRequireDefault(_toConsumableArray2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var webpackMerge = require("webpack-merge");

function applyPresets(env) {
  var _ref;

  var presets = env.presets;

  var mergedPresets = (_ref = []).concat.apply(_ref, [presets]);
  var mergedConfigs = mergedPresets.map(function (presetName) {
    return require("./webpack." + presetName)(env);
  });

  return webpackMerge.apply(undefined, [{}].concat((0, _toConsumableArray3.default)(mergedConfigs)));
}

module.exports = applyPresets;