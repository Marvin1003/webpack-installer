"use strict";

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var fs = require("fs");
var path = require("path");
var chalk = require("chalk");
var files = require("../data/files.json");
var getPresetData = require("../helper/getPresetData");
var packageJSON = path.resolve(process.cwd(), "package.json");

module.exports = function () {
  fs.readFile(packageJSON, "utf-8", function (err, data) {
    if (err) throw err;

    var json = JSON.parse(data);

    var plugins = files.boilerplates[process.env.PRESET].presets;

    var scripts = _extends({}, files.scripts);

    scripts = getPresetData(scripts, "script");

    var mergedScripts = Object.assign({}, json.scripts, scripts);

    json.scripts = mergedScripts;

    fs.writeFile(packageJSON, JSON.stringify(json, null, 2), "utf-8", function (err) {
      if (err) throw err;
    });
  });
};