"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _toConsumableArray2 = _interopRequireDefault(require("@babel/runtime/helpers/toConsumableArray"));

var _ = require("lodash");

var _require = require("child_process"),
    execSync = _require.execSync;

var ora = require("ora");

var files = require("../../installer/files.json");

var getPresetData = require("../helper/getPresetData");

module.exports = function () {
  var spinner = ora("Installing dependencies").start();
  console.log();
  var devDependencies = (0, _toConsumableArray2.default)(files.devDependencies).concat((0, _toConsumableArray2.default)(_.get(files, process.env.CONFIG.split("/")).devDependencies));
  var dependencies = (0, _toConsumableArray2.default)(files.dependencies).concat((0, _toConsumableArray2.default)(_.get(files, process.env.CONFIG.split("/")).dependencies));
  devDependencies = getPresetData(devDependencies, "devDependencies");
  dependencies = getPresetData(dependencies, "dependencies");
  install(devDependencies, "--save-dev");
  install(dependencies, "--save-prod");

  function install(dependencies, flag) {
    if (Array.isArray(dependencies)) execSync("npm install ".concat(dependencies.join(" "), " ").concat(flag, " --silent"), {
      cwd: process.cwd()
    });
  }

  spinner.succeed("Dependencies installed.");
};