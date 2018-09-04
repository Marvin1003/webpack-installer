"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteral"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

function _templateObject() {
  var data = (0, _taggedTemplateLiteral2.default)(["Folder {green.bold ", "} already exists."]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

var fs = require("fs-extra");

var path = require("path");

var chalk = require("chalk");

var ora = require("ora");

module.exports =
/*#__PURE__*/
(0, _asyncToGenerator2.default)(
/*#__PURE__*/
_regenerator.default.mark(function _callee2() {
  var spinner, checkFolderExists, _checkFolderExists;

  return _regenerator.default.wrap(function _callee2$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          _checkFolderExists = function _ref3() {
            _checkFolderExists = (0, _asyncToGenerator2.default)(
            /*#__PURE__*/
            _regenerator.default.mark(function _callee(folderPath, enter) {
              var dir;
              return _regenerator.default.wrap(function _callee$(_context) {
                while (1) {
                  switch (_context.prev = _context.next) {
                    case 0:
                      dir = path.resolve(process.cwd(), folderPath);

                      if (!fs.pathExistsSync(dir)) {
                        fs.ensureDir(dir, function (err) {
                          if (err) throw err;
                        });
                      } else {
                        spinner.info(chalk(_templateObject(), folderPath));
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
            return _checkFolderExists.apply(this, arguments);
          };

          checkFolderExists = function _ref2(_x, _x2) {
            return _checkFolderExists.apply(this, arguments);
          };

          console.log();
          spinner = ora("Creating folder structure");
          _context2.next = 6;
          return Promise.all([checkFolderExists("webpack-utils"), checkFolderExists("webpack-utils/presets"), checkFolderExists("webpack-utils/configs", true)]);

        case 6:
          spinner.succeed("Folder structure created.\n");

        case 7:
        case "end":
          return _context2.stop();
      }
    }
  }, _callee2, this);
}));