"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteral"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

function _templateObject7() {
  var data = (0, _taggedTemplateLiteral2.default)(["npm run {green.bold ", "}"]);

  _templateObject7 = function _templateObject7() {
    return data;
  };

  return data;
}

function _templateObject6() {
  var data = (0, _taggedTemplateLiteral2.default)(["File {green.bold src/index.js} created."]);

  _templateObject6 = function _templateObject6() {
    return data;
  };

  return data;
}

function _templateObject5() {
  var data = (0, _taggedTemplateLiteral2.default)(["Do you want to create {green.bold src/index.js}?"]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = (0, _taggedTemplateLiteral2.default)(["Failed installing dependencies. Try 'npm install' afterwards."]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = (0, _taggedTemplateLiteral2.default)(["Dependencies installed"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = (0, _taggedTemplateLiteral2.default)(["Do you want to install the dependencies?"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = (0, _taggedTemplateLiteral2.default)(["\nWelcome to {green.bold webpack-installer}!\n"], ["\\nWelcome to {green.bold webpack-installer}!\\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

var fs = require("fs-extra");

var path = require("path");

var _require = require("child_process"),
    execSync = _require.execSync;

var chalk = require("chalk");

var figlet = require("figlet");

var ora = require("ora");

var inquirer = require("inquirer");

var prompt = inquirer.createPromptModule();

var cli = require("./cli");

var createFolder = require("./manage/folder");

var updatePackage = require("./manage/updatePackage");

var createStaticFiles = require("./manage/staticFiles");

process.env.GLOBAL_PREFIX = "installer:";
process.env.SCRIPTS = [];
(function () {
  var _setup = (0, _asyncToGenerator2.default)(
  /*#__PURE__*/
  _regenerator.default.mark(function _callee3() {
    var cliMenu, res, generateConfig, _generateConfig;

    return _regenerator.default.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            _generateConfig = function _ref2() {
              _generateConfig = (0, _asyncToGenerator2.default)(
              /*#__PURE__*/
              _regenerator.default.mark(function _callee2(configType) {
                var config, configStr, answer, packageJson, _arr, _i, script;

                return _regenerator.default.wrap(function _callee2$(_context2) {
                  while (1) {
                    switch (_context2.prev = _context2.next) {
                      case 0:
                        _context2.next = 2;
                        return Promise.resolve().then(function () {
                          return require("".concat(process.env.CONFIG_PATH));
                        });

                      case 2:
                        config = _context2.sent;
                        configStr = "".concat(configType[configType.length - 2], " - ").concat(configType[configType.length - 1]);
                        console.log(chalk.underline("\nCreating ".concat(configStr, " config.\n")));
                        updatePackage(config); // Install dependencies

                        _context2.next = 8;
                        return prompt({
                          type: "confirm",
                          message: chalk(_templateObject2()),
                          name: "confirm"
                        });

                      case 8:
                        answer = _context2.sent;

                        if (answer.confirm) {
                          console.log();

                          try {
                            execSync("npm install --silent", {
                              cwd: process.cwd(),
                              stdio: "inherit"
                            });
                            ora().succeed(chalk(_templateObject3()));
                          } catch (err) {
                            ora().fail(chalk(_templateObject4()));
                          }
                        }

                        _context2.next = 12;
                        return createFolder(prompt);

                      case 12:
                        _context2.next = 14;
                        return createStaticFiles(prompt, configType[configType.length - 1], config);

                      case 14:
                        if (fs.pathExistsSync(path.resolve(process.cwd(), "src"))) {
                          _context2.next = 19;
                          break;
                        }

                        _context2.next = 17;
                        return prompt({
                          type: "confirm",
                          message: chalk(_templateObject5()),
                          name: "confirm"
                        });

                      case 17:
                        answer = _context2.sent;

                        if (answer.confirm) {
                          fs.createFileSync("src/index.js");
                          ora().info(chalk(_templateObject6()));
                        }

                      case 19:
                        _context2.next = 21;
                        return Promise.resolve().then(function () {
                          return require("".concat(path.resolve(process.cwd(), 'package.json')));
                        });

                      case 21:
                        packageJson = _context2.sent;
                        console.log(chalk.underline("\nAvailable scripts:\n"));
                        _arr = Object.keys(packageJson.scripts);

                        for (_i = 0; _i < _arr.length; _i++) {
                          script = _arr[_i];
                          console.log(chalk(_templateObject7(), script));
                        }

                      case 25:
                      case "end":
                        return _context2.stop();
                    }
                  }
                }, _callee2, this);
              }));
              return _generateConfig.apply(this, arguments);
            };

            generateConfig = function _ref(_x) {
              return _generateConfig.apply(this, arguments);
            };

            if ("clear" in global.console) console.clear();
            console.log(chalk.green(figlet.textSync("webpack  -  installer")));
            console.log(chalk(_templateObject()));
            cliMenu = cli.generateMenu(prompt);
            (function () {
              var _menu = (0, _asyncToGenerator2.default)(
              /*#__PURE__*/
              _regenerator.default.mark(function _callee() {
                var boilerplate;
                return _regenerator.default.wrap(function _callee$(_context) {
                  while (1) {
                    switch (_context.prev = _context.next) {
                      case 0:
                        _context.next = 2;
                        return cliMenu(res);

                      case 2:
                        res = _context.sent;

                      case 3:
                        if (!Array.isArray(res)) {
                          _context.next = 0;
                          break;
                        }

                      case 4:
                        boilerplate = res.map(function (input) {
                          return input.toLowerCase();
                        }).join("/");
                        process.env.BOILERPLATE_FOLDER = path.resolve(__dirname, "../configs/".concat(boilerplate));
                        process.env.CONFIG_PATH = path.resolve(__dirname, "".concat(process.env.BOILERPLATE_FOLDER, "/installer:config.json"));
                        generateConfig(res);

                      case 8:
                      case "end":
                        return _context.stop();
                    }
                  }
                }, _callee, this);
              }));

              function menu() {
                return _menu.apply(this, arguments);
              }

              return menu;
            })()();

          case 7:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3, this);
  }));

  function setup() {
    return _setup.apply(this, arguments);
  }

  return setup;
})()();