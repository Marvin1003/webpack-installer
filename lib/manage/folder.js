"use strict";

var _templateObject = _taggedTemplateLiteral(["Folder {green.bold ", "} generated."], ["Folder {green.bold ", "} generated."]),
    _templateObject2 = _taggedTemplateLiteral(["Folder {green.bold ", "} already exists."], ["Folder {green.bold ", "} already exists."]);

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var fs = require("fs");
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

    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir);
      spinner.succeed(chalk(_templateObject, folderPath));
    } else {
      spinner.info(chalk(_templateObject2, folderPath));
    }
    spinner.clear();
  }
};