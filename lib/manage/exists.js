"use strict";

var _templateObject = _taggedTemplateLiteral(["File {green.bold ", "} generated."], ["File {green.bold ", "} generated."]),
    _templateObject2 = _taggedTemplateLiteral(["File {green.bold ", "} already exists."], ["File {green.bold ", "} already exists."]),
    _templateObject3 = _taggedTemplateLiteral(["Do you want to overwrite {green.bold ", "}."], ["Do you want to overwrite {green.bold ", "}."]),
    _templateObject4 = _taggedTemplateLiteral(["File {green.bold ", "} has been overwritten.\n"], ["File {green.bold ", "} has been overwritten.\\n"]),
    _templateObject5 = _taggedTemplateLiteral(["Using current {green.bold ", "} file.\n"], ["Using current {green.bold ", "} file.\\n"]);

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

var fs = require("fs");
var path = require("path");
var chalk = require("chalk");

module.exports = function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(src, dest, spinner, prompt) {
    var resolvedDest, answer;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            src = path.resolve(process.cwd(), src);
            resolvedDest = path.resolve(process.cwd(), dest);

            if (fs.existsSync(resolvedDest)) {
              _context.next = 7;
              break;
            }

            fs.copyFileSync(src, resolvedDest);
            spinner.succeed(chalk(_templateObject, dest));
            _context.next = 12;
            break;

          case 7:
            spinner.info(chalk(_templateObject2, dest));

            _context.next = 10;
            return prompt({
              type: "confirm",
              message: chalk(_templateObject3, dest),
              name: "confirm"
            });

          case 10:
            answer = _context.sent;


            if (answer.confirm) {
              fs.copyFileSync(src, resolvedDest);
              spinner.succeed(chalk(_templateObject4, dest));
            } else {
              spinner.info(chalk(_templateObject5, dest));
            }

          case 12:
            spinner.clear();

          case 13:
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