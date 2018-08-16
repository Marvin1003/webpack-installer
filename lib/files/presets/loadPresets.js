"use strict";

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

var webpackMerge = require("webpack-merge");

function applyPresets(env) {
  var _ref;

  var presets = env.presets;

  var mergedPresets = (_ref = []).concat.apply(_ref, [presets]);
  var mergedConfigs = mergedPresets.map(function (presetName) {
    return require("./webpack." + presetName)(env);
  });

  return webpackMerge.apply(undefined, [{}].concat(_toConsumableArray(mergedConfigs)));
}

module.exports = applyPresets;