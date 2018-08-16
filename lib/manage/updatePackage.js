"use strict";

var _stringify = require("babel-runtime/core-js/json/stringify");

var _stringify2 = _interopRequireDefault(_stringify);

var _assign = require("babel-runtime/core-js/object/assign");

var _assign2 = _interopRequireDefault(_assign);

var _extends2 = require("babel-runtime/helpers/extends");

var _extends3 = _interopRequireDefault(_extends2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var fs = require("fs-extra");
var path = require("path");
var chalk = require("chalk");
var files = require("../data/files.json");
var getPresetData = require("../helper/getPresetData");
var packageJSON = path.resolve(process.cwd(), "package.json");

module.exports = function () {
  fs.readFile(packageJSON, "utf-8", function (err, data) {
    if (err) throw err;

    var json = JSON.parse(data);

    var scripts = (0, _extends3.default)({}, files.scripts);

    scripts = getPresetData(scripts, "script");

    var mergedScripts = (0, _assign2.default)({}, json.scripts, scripts);

    json.scripts = mergedScripts;

    fs.writeFileSync(packageJSON, (0, _stringify2.default)(json, null, 2), "utf-8", function (err) {
      if (err) throw err;
    });
  });
};