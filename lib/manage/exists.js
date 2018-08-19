"use strict";

var _regenerator = require("babel-runtime/regenerator");

var _regenerator2 = _interopRequireDefault(_regenerator);

var _taggedTemplateLiteral2 = require("babel-runtime/helpers/taggedTemplateLiteral");

var _taggedTemplateLiteral3 = _interopRequireDefault(_taggedTemplateLiteral2);

var _asyncToGenerator2 = require("babel-runtime/helpers/asyncToGenerator");

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _templateObject = (0, _taggedTemplateLiteral3.default)(["File {green.bold ", "} already exists."], ["File {green.bold ", "} already exists."]),
    _templateObject2 = (0, _taggedTemplateLiteral3.default)(["Do you want to overwrite {green.bold ", "}."], ["Do you want to overwrite {green.bold ", "}."]),
    _templateObject3 = (0, _taggedTemplateLiteral3.default)(["File {green.bold ", "} has been overwritten.\n"], ["File {green.bold ", "} has been overwritten.\\n"]),
    _templateObject4 = (0, _taggedTemplateLiteral3.default)(["Using current {green.bold ", "} file.\n"], ["Using current {green.bold ", "} file.\\n"]);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var fs = require("fs-extra");
var path = require("path");
var chalk = require("chalk");

module.exports = function () {
  var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(src, dest, spinner, prompt) {
    var resolvedDest, answer;
    return _regenerator2.default.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            src = path.resolve(process.cwd(), src);
            resolvedDest = path.resolve(process.cwd(), dest);

            if (fs.pathExistsSync(resolvedDest)) {
              _context.next = 6;
              break;
            }

            fs.copySync(src, resolvedDest);
            _context.next = 11;
            break;

          case 6:
            spinner.info(chalk(_templateObject, dest));

            _context.next = 9;
            return prompt({
              type: "confirm",
              message: chalk(_templateObject2, dest),
              name: "confirm"
            });

          case 9:
            answer = _context.sent;


            if (answer.confirm) {
              fs.copySync(src, resolvedDest);
              spinner.succeed(chalk(_templateObject3, dest));
            } else {
              spinner.info(chalk(_templateObject4, dest));
            }

          case 11:
            spinner.clear();

          case 12:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, undefined);
  }));

  return function (_x, _x2, _x3, _x4) {
    return _ref.apply(this, arguments);
  };
}();