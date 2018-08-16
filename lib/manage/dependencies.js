"use strict";

var _toConsumableArray2 = require("babel-runtime/helpers/toConsumableArray");

var _toConsumableArray3 = _interopRequireDefault(_toConsumableArray2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var shell = require("shelljs");
var ora = require("ora");
var files = require("../data/files.json");
var getPresetData = require("../helper/getPresetData");

module.exports = function () {
  var spinner = ora("Installing dependencies\n").start();

  var devDependencies = [].concat((0, _toConsumableArray3.default)(files.devDependencies), (0, _toConsumableArray3.default)(files.boilerplates[process.env.PRESET].devDependencies));

  var dependencies = [].concat((0, _toConsumableArray3.default)(files.dependencies), (0, _toConsumableArray3.default)(files.boilerplates[process.env.PRESET].dependencies));

  devDependencies = getPresetData(devDependencies, "devDependencies");

  dependencies = getPresetData(dependencies, "dependencies");

  install(devDependencies, "--save-dev");
  install(dependencies, "");

  function install(dependency, flag) {
    if (Array.isArray(dependency)) {
      dependency = dependency.join(" ");
      shell.exec("npm --prefix " + process.cwd() + " install " + dependency + " " + flag);
    }
  }

  console.log();
  spinner.succeed("Dependencies installed\n");
};