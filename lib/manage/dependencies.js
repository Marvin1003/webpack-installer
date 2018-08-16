"use strict";

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

var shell = require("shelljs");
var ora = require("ora");
var files = require("../data/files.json");
var getPresetData = require("../helper/getPresetData");

module.exports = function () {
  var spinner = ora("Installing dependencies\n").start();

  var devDependencies = [].concat(_toConsumableArray(files.devDependencies), _toConsumableArray(files.boilerplates[process.env.PRESET].devDependencies));

  var dependencies = [].concat(_toConsumableArray(files.dependencies), _toConsumableArray(files.boilerplates[process.env.PRESET].dependencies));

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