"use strict";

var _toConsumableArray2 = require("babel-runtime/helpers/toConsumableArray");

var _toConsumableArray3 = _interopRequireDefault(_toConsumableArray2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _ = require("lodash");

var _require = require("child_process"),
    execSync = _require.execSync;

var ora = require("ora");
var files = require("../../installer/files.json");
var getPresetData = require("../helper/getPresetData");

module.exports = function () {
  var spinner = ora("Installing dependencies").start();
  console.log();

  var devDependencies = [].concat((0, _toConsumableArray3.default)(files.devDependencies), (0, _toConsumableArray3.default)(_.get(files, process.env.CONFIG.split("/")).devDependencies));

  var dependencies = [].concat((0, _toConsumableArray3.default)(files.dependencies), (0, _toConsumableArray3.default)(_.get(files, process.env.CONFIG.split("/")).dependencies));

  devDependencies = getPresetData(devDependencies, "devDependencies");

  dependencies = getPresetData(dependencies, "dependencies");

  install(devDependencies, "--save-dev");
  install(dependencies, "--save-prod");

  function install(dependencies, flag) {
    if (Array.isArray(dependencies)) execSync("npm install " + dependencies.join(" ") + " " + flag + " --silent", {
      cwd: process.cwd()
    });
  }

  spinner.succeed("Dependencies installed");
};