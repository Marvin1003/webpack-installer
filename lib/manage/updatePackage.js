"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteral"));

var _objectSpread2 = _interopRequireDefault(require("@babel/runtime/helpers/objectSpread"));

function _templateObject() {
  var data = (0, _taggedTemplateLiteral2.default)(["Updated {green.bold package.json}."]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

var fs = require("fs-extra");

var path = require("path");

var ora = require("ora");

var chalk = require("chalk");

var files = require("../../installer/files.json");

var addPrefix = require("../helper/addPrefix");

var getPresetData = require("../helper/getPresetData");

var packageJSON = path.resolve(process.cwd(), "package.json");

module.exports = function () {
  var data = fs.readFileSync(packageJSON, "utf-8");

  if (data) {
    console.log();

    var _spinner = ora("Updating package.json").start();

    var json = JSON.parse(data);
    var scripts = (0, _objectSpread2.default)({}, files.scripts);
    scripts = getPresetData(scripts, "script");
    addPrefix(scripts, process.env.PREFIX);
    process.env.SCRIPTS = Object.keys(scripts);
    var mergedScripts = Object.assign({}, json.scripts, scripts);
    json.scripts = mergedScripts;
    fs.writeFileSync(packageJSON, JSON.stringify(json, null, 2), "utf-8");

    _spinner.succeed(chalk(_templateObject()));
  } else {
    spinner.fail("Something went wrong.\n");
  }
};