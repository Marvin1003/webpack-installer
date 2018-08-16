"use strict";

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

var files = require("../data/files.json");

module.exports = function (data, dataKey) {
  var plugins = files.boilerplates[process.env.PRESET].presets;

  plugins.forEach(function (plugin) {
    files.presets.forEach(function (preset) {
      if (preset.name === plugin && Boolean(preset[dataKey])) {
        if (Array.isArray(data)) {
          var value = Array.isArray(preset[dataKey]) ? preset[dataKey] : [preset[dataKey]];
          data = [].concat(_toConsumableArray(data), _toConsumableArray(value));
        } else data = _extends({}, data, preset[dataKey]);
      }
    });
  });

  return data;
};