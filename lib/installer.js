"use strict";

var _regenerator = require("babel-runtime/regenerator");

var _regenerator2 = _interopRequireDefault(_regenerator);

var _taggedTemplateLiteral2 = require("babel-runtime/helpers/taggedTemplateLiteral");

var _taggedTemplateLiteral3 = _interopRequireDefault(_taggedTemplateLiteral2);

var _asyncToGenerator2 = require("babel-runtime/helpers/asyncToGenerator");

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _templateObject = (0, _taggedTemplateLiteral3.default)(["\nWelcome to {green.bold webpack-installer}!\n"], ["\\nWelcome to {green.bold webpack-installer}!\\n"]),
    _templateObject2 = (0, _taggedTemplateLiteral3.default)(["\nGenerating your config\n"], ["\\nGenerating your config\\n"]);

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

(function () {
  var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee3() {
    var generateConfig = function () {
      var _ref3 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee2(result) {
        var spinner;
        return _regenerator2.default.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                console.log(chalk.underline(_templateObject2));

                spinner = ora().start();


                spinner.info("Generating folder structure ...\n");
                _context2.next = 5;
                return createFolder(prompt);

              case 5:
                console.log();
                spinner.succeed("Folder structure generated.\n");

                spinner.info("Generating static files ...\n");
                _context2.next = 10;
                return createStaticFiles(prompt, res);

              case 10:
                console.log();
                spinner.succeed("Static files generated.\n");

                spinner.clear();

                // CHECK IF PACKAGE.JSON EXISTS
                if (!fs.existsSync(path.resolve(process.cwd(), "package.json"))) {
                  spinner.info("No package.json found");
                  spinner.info("Generating package.json.");
                  execSync("npm --prefix " + process.cwd() + " init -y");
                  spinner.succeed("package.json created.\n");
                }

                dependencies();

                _context2.next = 17;
                return updatePackage();

              case 17:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this);
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