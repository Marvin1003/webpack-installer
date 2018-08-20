"use strict";

var _getIterator2 = require("babel-runtime/core-js/get-iterator");

var _getIterator3 = _interopRequireDefault(_getIterator2);

var _regenerator = require("babel-runtime/regenerator");

var _regenerator2 = _interopRequireDefault(_regenerator);

var _taggedTemplateLiteral2 = require("babel-runtime/helpers/taggedTemplateLiteral");

var _taggedTemplateLiteral3 = _interopRequireDefault(_taggedTemplateLiteral2);

var _asyncToGenerator2 = require("babel-runtime/helpers/asyncToGenerator");

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _templateObject = (0, _taggedTemplateLiteral3.default)(["\nWelcome to {green.bold webpack-installer}!\n"], ["\\nWelcome to {green.bold webpack-installer}!\\n"]),
    _templateObject2 = (0, _taggedTemplateLiteral3.default)(["Do you want to create {green.bold src/index.js}?"], ["Do you want to create {green.bold src/index.js}?"]),
    _templateObject3 = (0, _taggedTemplateLiteral3.default)(["File {green.bold src/index.js} created."], ["File {green.bold src/index.js} created."]),
    _templateObject4 = (0, _taggedTemplateLiteral3.default)(["npm run {green.bold ", "}"], ["npm run {green.bold ", "}"]);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

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
  var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee3() {
    var generateConfig = function () {
      var _ref3 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee2(configType) {
        var configStr, spinner, answer, _iteratorNormalCompletion, _didIteratorError, _iteratorError, _iterator, _step, script;

        return _regenerator2.default.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                configStr = configType[configType.length - 2] + " - " + configType[configType.length - 1];


                console.log(chalk.underline("\nGenerating " + configStr + " config.\n"));

                // CHECK IF PACKAGE.JSON EXISTS
                if (!fs.existsSync(path.resolve(process.cwd(), "package.json"))) {
                  spinner = ora("Initalizing npm project").start();

                  execSync("npm init -y", { cwd: process.cwd() });
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
                  message: chalk(_templateObject2),
                  name: "confirm"
                });

              case 12:
                answer = _context2.sent;

                if (answer.confirm) {
                  fs.createFileSync("src/index.js");
                  ora().info(chalk(_templateObject3));
                }

              case 14:

                console.log(chalk.underline("\nAvailable scripts:\n"));
                _iteratorNormalCompletion = true;
                _didIteratorError = false;
                _iteratorError = undefined;
                _context2.prev = 18;
                for (_iterator = (0, _getIterator3.default)(process.env.SCRIPTS.split(",")); !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
                  script = _step.value;

                  console.log(chalk(_templateObject4, script));
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

                if (!_iteratorNormalCompletion && _iterator.return) {
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

      return function generateConfig(_x) {
        return _ref3.apply(this, arguments);
      };
    }();

    var cliMenu, res;
    return _regenerator2.default.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            console.clear();
            console.log(chalk.green(figlet.textSync("webpack  -  installer")));
            console.log(chalk(_templateObject));

            cliMenu = cli.generateMenu(prompt);
            res = void 0;

            (function () {
              var _ref2 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee() {
                var path;
                return _regenerator2.default.wrap(function _callee$(_context) {
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

              function menu() {
                return _ref2.apply(this, arguments);
              }

              return menu;
            })()();

          case 6:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3, this);
  }));

  function setup() {
    return _ref.apply(this, arguments);
  }

  return setup;
})()();