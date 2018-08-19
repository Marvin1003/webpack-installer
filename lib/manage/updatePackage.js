"use strict";

var _taggedTemplateLiteral2 = require("babel-runtime/helpers/taggedTemplateLiteral");

var _taggedTemplateLiteral3 = _interopRequireDefault(_taggedTemplateLiteral2);

var _stringify = require("babel-runtime/core-js/json/stringify");

var _stringify2 = _interopRequireDefault(_stringify);

var _assign = require("babel-runtime/core-js/object/assign");

var _assign2 = _interopRequireDefault(_assign);

var _keys = require("babel-runtime/core-js/object/keys");

var _keys2 = _interopRequireDefault(_keys);

var _extends2 = require("babel-runtime/helpers/extends");

var _extends3 = _interopRequireDefault(_extends2);

var _templateObject = (0, _taggedTemplateLiteral3.default)(["Updated {green.bold package.json}."], ["Updated {green.bold package.json}."]);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

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

    var scripts = (0, _extends3.default)({}, files.scripts);

    scripts = getPresetData(scripts, "script");

    addPrefix(scripts, process.env.PREFIX);

    process.env.SCRIPTS = (0, _keys2.default)(scripts);

    var mergedScripts = (0, _assign2.default)({}, json.scripts, scripts);

    json.scripts = mergedScripts;

    fs.writeFileSync(packageJSON, (0, _stringify2.default)(json, null, 2), "utf-8");

    _spinner.succeed(chalk(_templateObject));
  } else {
    spinner.fail("Something went wrong.\n");
  }
};