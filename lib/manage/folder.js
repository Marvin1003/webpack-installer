"use strict";

var _regenerator = require("babel-runtime/regenerator");

var _regenerator2 = _interopRequireDefault(_regenerator);

var _taggedTemplateLiteral2 = require("babel-runtime/helpers/taggedTemplateLiteral");

var _taggedTemplateLiteral3 = _interopRequireDefault(_taggedTemplateLiteral2);

var _promise = require("babel-runtime/core-js/promise");

var _promise2 = _interopRequireDefault(_promise);

var _asyncToGenerator2 = require("babel-runtime/helpers/asyncToGenerator");

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _templateObject = (0, _taggedTemplateLiteral3.default)(["Folder {green.bold ", "} already exists."], ["Folder {green.bold ", "} already exists."]);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var fs = require("fs-extra");
var path = require("path");
var chalk = require("chalk");
var ora = require("ora");

module.exports = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee2() {
  var checkFolderExists = function () {
    var _ref2 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(folderPath, enter) {
      var dir;
      return _regenerator2.default.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              dir = path.resolve(process.cwd(), folderPath);


              if (!fs.pathExistsSync(dir)) {
                fs.ensureDir(dir, function (err) {
                  if (err) throw err;
                });
              } else {
                spinner.info(chalk(_templateObject, folderPath));
                enter && console.log();
              }
              spinner.clear();

            case 3:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, this);
    }));

    return function checkFolderExists(_x, _x2) {
      return _ref2.apply(this, arguments);
    };
  }();

  var spinner;
  return _regenerator2.default.wrap(function _callee2$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          console.log();
          spinner = ora("Creating folder structure");
          _context2.next = 4;
          return _promise2.default.all([checkFolderExists("webpack-utils"), checkFolderExists("webpack-utils/presets"), checkFolderExists("webpack-utils/configs", true)]);

        case 4:

          spinner.succeed("Folder structure created.\n");

        case 5:
        case "end":
          return _context2.stop();
      }
    }
  }, _callee2, undefined);
}));