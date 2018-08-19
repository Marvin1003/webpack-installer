"use strict";

var _regenerator = require("babel-runtime/regenerator");

var _regenerator2 = _interopRequireDefault(_regenerator);

var _getIterator2 = require("babel-runtime/core-js/get-iterator");

var _getIterator3 = _interopRequireDefault(_getIterator2);

var _asyncToGenerator2 = require("babel-runtime/helpers/asyncToGenerator");

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var checkFile = function () {
  var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(dir, dest, spinner, prompt) {
    var _iteratorNormalCompletion, _didIteratorError, _iteratorError, _iterator, _step, file;

    return _regenerator2.default.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _iteratorNormalCompletion = true;
            _didIteratorError = false;
            _iteratorError = undefined;
            _context.prev = 3;
            _iterator = (0, _getIterator3.default)(fs.readdirSync(dir));

          case 5:
            if (_iteratorNormalCompletion = (_step = _iterator.next()).done) {
              _context.next = 12;
              break;
            }

            file = _step.value;
            _context.next = 9;
            return exists(path.resolve(dir, file), "webpack-utils/" + dest + "/" + file, spinner, prompt);

          case 9:
            _iteratorNormalCompletion = true;
            _context.next = 5;
            break;

          case 12:
            _context.next = 18;
            break;

          case 14:
            _context.prev = 14;
            _context.t0 = _context["catch"](3);
            _didIteratorError = true;
            _iteratorError = _context.t0;

          case 18:
            _context.prev = 18;
            _context.prev = 19;

            if (!_iteratorNormalCompletion && _iterator.return) {
              _iterator.return();
            }

          case 21:
            _context.prev = 21;

            if (!_didIteratorError) {
              _context.next = 24;
              break;
            }

            throw _iteratorError;

          case 24:
            return _context.finish(21);

          case 25:
            return _context.finish(18);

          case 26:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, this, [[3, 14, 18, 26], [19,, 21, 25]]);
  }));

  return function checkFile(_x, _x2, _x3, _x4) {
    return _ref.apply(this, arguments);
  };
}();

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var fs = require("fs-extra");
var path = require("path");
var ora = require("ora");

var exists = require("./exists");

module.exports = function () {
  var _ref2 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee2(prompt, input) {
    var spinner, boilerplateSRC, _iteratorNormalCompletion2, _didIteratorError2, _iteratorError2, _iterator2, _step2, item, src, stats, _iteratorNormalCompletion3, _didIteratorError3, _iteratorError3, _iterator3, _step3, elem, utilPath;

    return _regenerator2.default.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            spinner = ora("Creating files").start();
            _context2.next = 3;
            return exists(path.resolve(__dirname, "../../configs/presets/loadPresets.js"), "webpack-utils/presets/loadPresets.js", spinner, prompt);

          case 3:
            _context2.next = 5;
            return exists(path.resolve(__dirname, "../../configs/stats.js"), "webpack-utils/stats.js", spinner, prompt);

          case 5:
            boilerplateSRC = path.resolve(__dirname, "../../configs/" + process.env.CONFIG + "/");
            _iteratorNormalCompletion2 = true;
            _didIteratorError2 = false;
            _iteratorError2 = undefined;
            _context2.prev = 9;
            _iterator2 = (0, _getIterator3.default)(fs.readdirSync(boilerplateSRC));

          case 11:
            if (_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done) {
              _context2.next = 58;
              break;
            }

            item = _step2.value;
            src = path.resolve(boilerplateSRC, item);
            stats = fs.statSync(src);

            if (!stats.isDirectory()) {
              _context2.next = 52;
              break;
            }

            _iteratorNormalCompletion3 = true;
            _didIteratorError3 = false;
            _iteratorError3 = undefined;
            _context2.prev = 19;
            _iterator3 = (0, _getIterator3.default)(fs.readdirSync(src));

          case 21:
            if (_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done) {
              _context2.next = 36;
              break;
            }

            elem = _step3.value;
            utilPath = path.resolve(src, elem);
            _context2.t0 = elem;
            _context2.next = _context2.t0 === "configs" ? 27 : _context2.t0 === "presets" ? 30 : 33;
            break;

          case 27:
            _context2.next = 29;
            return checkFile(utilPath, "configs", spinner, prompt);

          case 29:
            return _context2.abrupt("break", 33);

          case 30:
            _context2.next = 32;
            return checkFile(utilPath, "presets", spinner, prompt);

          case 32:
            return _context2.abrupt("break", 33);

          case 33:
            _iteratorNormalCompletion3 = true;
            _context2.next = 21;
            break;

          case 36:
            _context2.next = 42;
            break;

          case 38:
            _context2.prev = 38;
            _context2.t1 = _context2["catch"](19);
            _didIteratorError3 = true;
            _iteratorError3 = _context2.t1;

          case 42:
            _context2.prev = 42;
            _context2.prev = 43;

            if (!_iteratorNormalCompletion3 && _iterator3.return) {
              _iterator3.return();
            }

          case 45:
            _context2.prev = 45;

            if (!_didIteratorError3) {
              _context2.next = 48;
              break;
            }

            throw _iteratorError3;

          case 48:
            return _context2.finish(45);

          case 49:
            return _context2.finish(42);

          case 50:
            _context2.next = 55;
            break;

          case 52:
            if (!stats.isFile()) {
              _context2.next = 55;
              break;
            }

            _context2.next = 55;
            return exists(src, item, spinner, prompt);

          case 55:
            _iteratorNormalCompletion2 = true;
            _context2.next = 11;
            break;

          case 58:
            _context2.next = 64;
            break;

          case 60:
            _context2.prev = 60;
            _context2.t2 = _context2["catch"](9);
            _didIteratorError2 = true;
            _iteratorError2 = _context2.t2;

          case 64:
            _context2.prev = 64;
            _context2.prev = 65;

            if (!_iteratorNormalCompletion2 && _iterator2.return) {
              _iterator2.return();
            }

          case 67:
            _context2.prev = 67;

            if (!_didIteratorError2) {
              _context2.next = 70;
              break;
            }

            throw _iteratorError2;

          case 70:
            return _context2.finish(67);

          case 71:
            return _context2.finish(64);

          case 72:
            spinner.succeed("Files created.\n");

          case 73:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2, undefined, [[9, 60, 64, 72], [19, 38, 42, 50], [43,, 45, 49], [65,, 67, 71]]);
  }));

  return function (_x5, _x6) {
    return _ref2.apply(this, arguments);
  };
}();