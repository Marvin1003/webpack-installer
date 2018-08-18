"use strict";

var _extends2 = require("babel-runtime/helpers/extends");

var _extends3 = _interopRequireDefault(_extends2);

var _toConsumableArray2 = require("babel-runtime/helpers/toConsumableArray");

var _toConsumableArray3 = _interopRequireDefault(_toConsumableArray2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _ = require("lodash");
var files = require("../../installer/files.json");

module.exports = function (data, dataKey) {
  var plugins = _.get(files, process.env.CONFIG.split("/")).presets;

  Array.isArray(plugins) && plugins.forEach(function (plugin) {
    files.presets.forEach(function (preset) {
      if (preset.name === plugin && Boolean(preset[dataKey])) {
        if (Array.isArray(data)) {
          var value = Array.isArray(preset[dataKey]) ? preset[dataKey] : [preset[dataKey]];
          data = [].concat((0, _toConsumableArray3.default)(data), (0, _toConsumableArray3.default)(value));
        } else data = (0, _extends3.default)({}, data, preset[dataKey]);
      }
    });
  });

  return data;
};