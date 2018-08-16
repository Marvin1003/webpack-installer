"use strict";

var _taggedTemplateLiteral2 = require("babel-runtime/helpers/taggedTemplateLiteral");

var _taggedTemplateLiteral3 = _interopRequireDefault(_taggedTemplateLiteral2);

var _templateObject = (0, _taggedTemplateLiteral3.default)(["Folder {green.bold ", "} generated."], ["Folder {green.bold ", "} generated."]),
    _templateObject2 = (0, _taggedTemplateLiteral3.default)(["Folder {green.bold ", "} already exists."], ["Folder {green.bold ", "} already exists."]);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var fs = require("fs-extra");
var path = require("path");
var chalk = require("chalk");
var ora = require("ora");

module.exports = function () {
  var spinner = ora("Generating folder structure").start();

  checkFolderExists("webpack-utils");
  checkFolderExists("webpack-utils/presets");
  checkFolderExists("webpack-utils/configs");

  function checkFolderExists(folderPath) {
    var dir = path.resolve(process.cwd(), folderPath);

    if (!fs.pathExistsSync(dir)) {
      fs.ensureDirSync(dir);
      spinner.succeed(chalk(_templateObject, folderPath));
    } else {
      spinner.info(chalk(_templateObject2, folderPath));
    }
    spinner.clear();
  }
};