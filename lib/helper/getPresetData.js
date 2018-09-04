"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _objectSpread2 = _interopRequireDefault(require("@babel/runtime/helpers/objectSpread"));

var _toConsumableArray2 = _interopRequireDefault(require("@babel/runtime/helpers/toConsumableArray"));

var _ = require("lodash");

var files = require("../../installer/files.json");

module.exports = function (data, dataKey) {
  var plugins = _.get(files, process.env.CONFIG.split("/")).presets;

  Array.isArray(plugins) && plugins.forEach(function (plugin) {
    files.presets.forEach(function (preset) {
      if (preset.name === plugin && Boolean(preset[dataKey])) {
        if (Array.isArray(data)) {
          var value = Array.isArray(preset[dataKey]) ? preset[dataKey] : [preset[dataKey]];
          data = (0, _toConsumableArray2.default)(data).concat((0, _toConsumableArray2.default)(value));
        } else data = (0, _objectSpread2.default)({}, data, preset[dataKey]);
      }
    });
  });
  return data;
};