"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteral"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

function _templateObject4() {
  var data = (0, _taggedTemplateLiteral2.default)(["npm run {green.bold ", "}"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = (0, _taggedTemplateLiteral2.default)(["File {green.bold src/index.js} created."]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = (0, _taggedTemplateLiteral2.default)(["Do you want to create {green.bold src/index.js}?"]);

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

var dependencies = require("./manage/dependencies");

var createStaticFiles = require("./manage/staticFiles");

process.env.PREFIX = "installer:";
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
                var configStr, spinner, answer, _iteratorNormalCompletion, _didIteratorError, _iteratorError, _iterator, _step, script;

                return _regenerator.default.wrap(function _callee2$(_context2) {
                  while (1) {
                    switch (_context2.prev = _context2.next) {
                      case 0:
                        configStr = "".concat(configType[configType.length - 2], " - ").concat(configType[configType.length - 1]);
                        console.log(chalk.underline("\nCreating ".concat(configStr, " config.\n"))); // CHECK IF PACKAGE.JSON EXISTS

                        if (!fs.existsSync(path.resolve(process.cwd(), "package.json"))) {
                          spinner = ora("Initalizing npm project").start();
                          execSync("npm init -y", {
                            cwd: process.cwd()
                          });
                          spinner.succeed(chalk("Npm project initialised.\n"));
                        }

                        dependencies();
                        updatePackage();
                        _context2.next = 7;
                        return createFolder(prompt);

                      case 7:
                        _context2.next = 9;
                        return createStaticFiles(prompt, res);

                      case 9:
                        if (fs.pathExistsSync(path.resolve(process.cwd(), "src"))) {
                          _context2.next = 14;
                          break;
                        }

                        _context2.next = 12;
                        return prompt({
                          type: "confirm",
                          message: chalk(_templateObject2()),
                          name: "confirm"
                        });

                      case 12:
                        answer = _context2.sent;

                        if (answer.confirm) {
                          fs.createFileSync("src/index.js");
                          ora().info(chalk(_templateObject3()));
                        }

                      case 14:
                        console.log(chalk.underline("\nAvailable scripts:\n"));
                        _iteratorNormalCompletion = true;
                        _didIteratorError = false;
                        _iteratorError = undefined;
                        _context2.prev = 18;

                        for (_iterator = process.env.SCRIPTS.split(",")[Symbol.iterator](); !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
                          script = _step.value;
                          console.log(chalk(_templateObject4(), script));
                        }

                        _context2.next = 26;
                        break;

                      case 22:
                        _context2.prev = 22;
                        _context2.t0 = _context2["catch"](18);
                        _didIteratorError = true;
                        _iteratorError = _context2.t0;

                      case 26:
                        _context2.prev = 26;
                        _context2.prev = 27;

                        if (!_iteratorNormalCompletion && _iterator.return != null) {
                          _iterator.return();
                        }

                      case 29:
                        _context2.prev = 29;

                        if (!_didIteratorError) {
                          _context2.next = 32;
                          break;
                        }

                        throw _iteratorError;

                      case 32:
                        return _context2.finish(29);

                      case 33:
                        return _context2.finish(26);

                      case 34:
                      case "end":
                        return _context2.stop();
                    }
                  }
                }, _callee2, this, [[18, 22, 26, 34], [27,, 29, 33]]);
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
                var path;
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
                        path = res.map(function (input) {
                          return input.toLowerCase();
                        }).join("/");
                        process.env.CONFIG = path;
                        generateConfig(res);

                      case 7:
                      case "end":
                        return _context.stop();
                    }
                  }
                }, _callee, this);
              }));

              return function menu() {
                return _menu.apply(this, arguments);
              };
            })()();

          case 7:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3, this);
  }));

  return function setup() {
    return _setup.apply(this, arguments);
  };
})()();