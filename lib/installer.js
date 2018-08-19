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
    _templateObject2 = (0, _taggedTemplateLiteral3.default)(["\nGenerating your config\n"], ["\\nGenerating your config\\n"]),
    _templateObject3 = (0, _taggedTemplateLiteral3.default)(["Npm project initialised.\n"], ["Npm project initialised.\\n"]),
    _templateObject4 = (0, _taggedTemplateLiteral3.default)(["Do you want to create {green.bold src/index.js}?"], ["Do you want to create {green.bold src/index.js}?"]),
    _templateObject5 = (0, _taggedTemplateLiteral3.default)(["File {green.bold src/index.js} created."], ["File {green.bold src/index.js} created."]),
    _templateObject6 = (0, _taggedTemplateLiteral3.default)(["\nAvailable scripts:\n"], ["\\nAvailable scripts:\\n"]),
    _templateObject7 = (0, _taggedTemplateLiteral3.default)(["npm run {green.bold ", "}"], ["npm run {green.bold ", "}"]);

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
      var _ref3 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee2(result) {
        var spinner, answer, _iteratorNormalCompletion, _didIteratorError, _iteratorError, _iterator, _step, script;

        return _regenerator2.default.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                console.log(chalk.underline(_templateObject2));

                // CHECK IF PACKAGE.JSON EXISTS
                if (!fs.existsSync(path.resolve(process.cwd(), "package.json"))) {
                  spinner = ora("Initalizing npm project").start();

                  execSync("npm init -y", { cwd: process.cwd() });
                  spinner.succeed(chalk(_templateObject3));
                }

                dependencies();
                updatePackage();

                _context2.next = 6;
                return createFolder(prompt);

              case 6:
                _context2.next = 8;
                return createStaticFiles(prompt, res);

              case 8:
                if (fs.pathExistsSync(path.resolve(process.cwd(), "src"))) {
                  _context2.next = 13;
                  break;
                }

                _context2.next = 11;
                return prompt({
                  type: "confirm",
                  message: chalk(_templateObject4),
                  name: "confirm"
                });

              case 11:
                answer = _context2.sent;

                if (answer.confirm) {
                  fs.createFileSync("src/index.js");
                  ora().info(chalk(_templateObject5));
                }

              case 13:

                console.log(chalk.underline(_templateObject6));
                _iteratorNormalCompletion = true;
                _didIteratorError = false;
                _iteratorError = undefined;
                _context2.prev = 17;
                for (_iterator = (0, _getIterator3.default)(process.env.SCRIPTS.split(",")); !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
                  script = _step.value;

                  console.log(chalk(_templateObject7, script));
                }
                _context2.next = 25;
                break;

              case 21:
                _context2.prev = 21;
                _context2.t0 = _context2["catch"](17);
                _didIteratorError = true;
                _iteratorError = _context2.t0;

              case 25:
                _context2.prev = 25;
                _context2.prev = 26;

                if (!_iteratorNormalCompletion && _iterator.return) {
                  _iterator.return();
                }

              case 28:
                _context2.prev = 28;

                if (!_didIteratorError) {
                  _context2.next = 31;
                  break;
                }

                throw _iteratorError;

              case 31:
                return _context2.finish(28);

              case 32:
                return _context2.finish(25);

              case 33:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this, [[17, 21, 25, 33], [26,, 28, 32]]);
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
                        generateConfig();

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