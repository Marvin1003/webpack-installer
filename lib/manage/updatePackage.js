"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteral"));

var _typeof2 = _interopRequireDefault(require("@babel/runtime/helpers/typeof"));

function _templateObject() {
  var data = (0, _taggedTemplateLiteral2.default)(["Updated {green.bold package.json}.\n"], ["Updated {green.bold package.json}.\\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

var fs = require("fs-extra");

var path = require("path");

var ora = require("ora");

var _require = require("child_process"),
    execSync = _require.execSync;

var chalk = require("chalk");

var addPrefix = require("../helper/addPrefix");

var globalConfig = require("../../data/installer:global.json");

var packageJSON = path.resolve(process.cwd(), "package.json");

module.exports = function (config) {
  // Check if package.json already exists
  if (!fs.existsSync(packageJSON)) {
    var _spinner = ora("Initalizing npm project").start();

    try {
      execSync("npm init -y", {
        cwd: process.cwd()
      });

      _spinner.succeed(chalk("Npm project initialised.\n"));
    } catch (err) {
      _spinner.fail(chalk("Failed initializing npm project.\n"));

      throw "I am so sorry ..";
    }
  }

  var json = fs.readFileSync(packageJSON, "utf-8");

  if (json) {
    var mergeData = function mergeData(conf, localConf) {
      if (conf.hasOwnProperty("package") && (0, _typeof2.default)(conf.package) === "object") {
        for (var key in conf.package) {
          data[key] = Object.assign({}, conf.package[key], data[key]);
        }
      }

      if (localConf && conf.hasOwnProperty("presets") && Array.isArray(conf.presets)) {
        var _iteratorNormalCompletion = true;
        var _didIteratorError = false;
        var _iteratorError = undefined;

        try {
          for (var _iterator = conf.presets[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
            var preset = _step.value;

            if ((0, _typeof2.default)(preset) === "object") {
              for (var presetDataKey in preset) {
                data[presetDataKey] = Object.assign({}, preset[presetDataKey], data[presetDataKey]);
              }
            } else {
              if (globalConfig.hasOwnProperty("presets")) {
                if ((0, _typeof2.default)(globalConfig.presets[preset]) === "object") {
                  for (var _presetDataKey in globalConfig.presets[preset]) {
                    data[_presetDataKey] = Object.assign({}, globalConfig.presets[preset][_presetDataKey], data[_presetDataKey]);
                  }
                }
              }
            }
          }
        } catch (err) {
          _didIteratorError = true;
          _iteratorError = err;
        } finally {
          try {
            if (!_iteratorNormalCompletion && _iterator.return != null) {
              _iterator.return();
            }
          } finally {
            if (_didIteratorError) {
              throw _iteratorError;
            }
          }
        }
      }
    };

    var _spinner2 = ora("Updating package.json").start();

    var data = JSON.parse(json);
    mergeData(config, true);
    mergeData(globalConfig, false);
    addPrefix(data.scripts, process.env.GLOBAL_PREFIX);
    fs.writeFileSync(packageJSON, JSON.stringify(data, null, 2), "utf-8");

    _spinner2.succeed(chalk(_templateObject()));
  } else spinner.fail("Something went wrong.\n");
};