"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteral"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

function _templateObject4() {
  var data = (0, _taggedTemplateLiteral2.default)(["Using current {green.bold ", "} file.\n"], ["Using current {green.bold ", "} file.\\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = (0, _taggedTemplateLiteral2.default)(["File {green.bold ", "} has been overwritten.\n"], ["File {green.bold ", "} has been overwritten.\\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = (0, _taggedTemplateLiteral2.default)(["Do you want to overwrite {green.bold ", "}."]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = (0, _taggedTemplateLiteral2.default)(["File {green.bold ", "} already exists."]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

var fs = require("fs-extra");

var path = require("path");

var chalk = require("chalk");

module.exports =
/*#__PURE__*/
function () {
  var _ref = (0, _asyncToGenerator2.default)(
  /*#__PURE__*/
  _regenerator.default.mark(function _callee(src, dest, spinner, prompt) {
    var stats, resolvedDest, answer;
    return _regenerator.default.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            src = path.resolve(process.cwd(), src);
            stats = fs.statSync(src);
            resolvedDest = path.resolve(process.cwd(), dest);

            if (!(stats.isFile() && !fs.pathExistsSync(resolvedDest))) {
              _context.next = 7;
              break;
            }

            fs.copySync(src, resolvedDest);
            _context.next = 12;
            break;

          case 7:
            spinner.info(chalk(_templateObject(), dest));
            _context.next = 10;
            return prompt({
              type: "confirm",
              message: chalk(_templateObject2(), dest),
              name: "confirm"
            });

          case 10:
            answer = _context.sent;

            if (answer.confirm) {
              fs.copySync(src, resolvedDest);
              spinner.succeed(chalk(_templateObject3(), dest));
            } else {
              spinner.info(chalk(_templateObject4(), dest));
            }

          case 12:
            spinner.clear();

          case 13:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, this);
  }));

  return function (_x, _x2, _x3, _x4) {
    return _ref.apply(this, arguments);
  };
}();