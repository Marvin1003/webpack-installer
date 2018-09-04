"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var fs = require("fs-extra");

var path = require("path");

var ora = require("ora");

var _ = require("lodash");

var files = require("../../installer/files.json");

var exists = require("./exists");

function checkFile(_x, _x2, _x3, _x4) {
  return _checkFile.apply(this, arguments);
}

function _checkFile() {
  _checkFile = (0, _asyncToGenerator2.default)(
  /*#__PURE__*/
  _regenerator.default.mark(function _callee2(dir, dest, spinner, prompt) {
    var _iteratorNormalCompletion4, _didIteratorError4, _iteratorError4, _iterator4, _step4, file;

    return _regenerator.default.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _iteratorNormalCompletion4 = true;
            _didIteratorError4 = false;
            _iteratorError4 = undefined;
            _context2.prev = 3;
            _iterator4 = fs.readdirSync(dir)[Symbol.iterator]();

          case 5:
            if (_iteratorNormalCompletion4 = (_step4 = _iterator4.next()).done) {
              _context2.next = 12;
              break;
            }

            file = _step4.value;
            _context2.next = 9;
            return exists(path.resolve(dir, file), "webpack-utils/".concat(dest, "/").concat(file), spinner, prompt);

          case 9:
            _iteratorNormalCompletion4 = true;
            _context2.next = 5;
            break;

          case 12:
            _context2.next = 18;
            break;

          case 14:
            _context2.prev = 14;
            _context2.t0 = _context2["catch"](3);
            _didIteratorError4 = true;
            _iteratorError4 = _context2.t0;

          case 18:
            _context2.prev = 18;
            _context2.prev = 19;

            if (!_iteratorNormalCompletion4 && _iterator4.return != null) {
              _iterator4.return();
            }

          case 21:
            _context2.prev = 21;

            if (!_didIteratorError4) {
              _context2.next = 24;
              break;
            }

            throw _iteratorError4;

          case 24:
            return _context2.finish(21);

          case 25:
            return _context2.finish(18);

          case 26:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2, this, [[3, 14, 18, 26], [19,, 21, 25]]);
  }));
  return _checkFile.apply(this, arguments);
}

module.exports =
/*#__PURE__*/
function () {
  var _ref = (0, _asyncToGenerator2.default)(
  /*#__PURE__*/
  _regenerator.default.mark(function _callee(prompt, input) {
    var spinner, boilerplateSRC, _iteratorNormalCompletion, _didIteratorError, _iteratorError, _iterator, _step, item, src, stats, _iteratorNormalCompletion3, _didIteratorError3, _iteratorError3, _iterator3, _step3, elem, utilPath, presets, _iteratorNormalCompletion2, _didIteratorError2, _iteratorError2, _iterator2, _step2, fileName;

    return _regenerator.default.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            spinner = ora("Creating files").start();
            _context.next = 3;
            return exists(path.resolve(__dirname, "../../configs/presets/loadPresets.js"), "webpack-utils/presets/loadPresets.js", spinner, prompt);

          case 3:
            _context.next = 5;
            return exists(path.resolve(__dirname, "../../configs/stats.js"), "webpack-utils/stats.js", spinner, prompt);

          case 5:
            boilerplateSRC = path.resolve(__dirname, "../../configs/".concat(process.env.CONFIG, "/"));
            _iteratorNormalCompletion = true;
            _didIteratorError = false;
            _iteratorError = undefined;
            _context.prev = 9;
            _iterator = fs.readdirSync(boilerplateSRC)[Symbol.iterator]();

          case 11:
            if (_iteratorNormalCompletion = (_step = _iterator.next()).done) {
              _context.next = 51;
              break;
            }

            item = _step.value;
            src = path.resolve(boilerplateSRC, item);
            stats = fs.statSync(src);

            if (!stats.isDirectory()) {
              _context.next = 46;
              break;
            }

            _iteratorNormalCompletion3 = true;
            _didIteratorError3 = false;
            _iteratorError3 = undefined;
            _context.prev = 19;
            _iterator3 = fs.readdirSync(src)[Symbol.iterator]();

          case 21:
            if (_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done) {
              _context.next = 30;
              break;
            }

            elem = _step3.value;
            utilPath = path.resolve(src, elem);
            stats = fs.statSync(utilPath);
            _context.next = 27;
            return checkFile(utilPath, elem, spinner, prompt);

          case 27:
            _iteratorNormalCompletion3 = true;
            _context.next = 21;
            break;

          case 30:
            _context.next = 36;
            break;

          case 32:
            _context.prev = 32;
            _context.t0 = _context["catch"](19);
            _didIteratorError3 = true;
            _iteratorError3 = _context.t0;

          case 36:
            _context.prev = 36;
            _context.prev = 37;

            if (!_iteratorNormalCompletion3 && _iterator3.return != null) {
              _iterator3.return();
            }

          case 39:
            _context.prev = 39;

            if (!_didIteratorError3) {
              _context.next = 42;
              break;
            }

            throw _iteratorError3;

          case 42:
            return _context.finish(39);

          case 43:
            return _context.finish(36);

          case 44:
            _context.next = 48;
            break;

          case 46:
            _context.next = 48;
            return exists(src, item, spinner, prompt);

          case 48:
            _iteratorNormalCompletion = true;
            _context.next = 11;
            break;

          case 51:
            _context.next = 57;
            break;

          case 53:
            _context.prev = 53;
            _context.t1 = _context["catch"](9);
            _didIteratorError = true;
            _iteratorError = _context.t1;

          case 57:
            _context.prev = 57;
            _context.prev = 58;

            if (!_iteratorNormalCompletion && _iterator.return != null) {
              _iterator.return();
            }

          case 60:
            _context.prev = 60;

            if (!_didIteratorError) {
              _context.next = 63;
              break;
            }

            throw _iteratorError;

          case 63:
            return _context.finish(60);

          case 64:
            return _context.finish(57);

          case 65:
            presets = _.get(files, process.env.CONFIG.split("/")).presets;

            if (!Array.isArray(presets)) {
              _context.next = 93;
              break;
            }

            _iteratorNormalCompletion2 = true;
            _didIteratorError2 = false;
            _iteratorError2 = undefined;
            _context.prev = 70;
            _iterator2 = presets[Symbol.iterator]();

          case 72:
            if (_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done) {
              _context.next = 79;
              break;
            }

            fileName = _step2.value;
            _context.next = 76;
            return exists(path.resolve(__dirname, "../../configs/presets/".concat(fileName)), "webpack-utils/presets/".concat(fileName), spinner, prompt);

          case 76:
            _iteratorNormalCompletion2 = true;
            _context.next = 72;
            break;

          case 79:
            _context.next = 85;
            break;

          case 81:
            _context.prev = 81;
            _context.t2 = _context["catch"](70);
            _didIteratorError2 = true;
            _iteratorError2 = _context.t2;

          case 85:
            _context.prev = 85;
            _context.prev = 86;

            if (!_iteratorNormalCompletion2 && _iterator2.return != null) {
              _iterator2.return();
            }

          case 88:
            _context.prev = 88;

            if (!_didIteratorError2) {
              _context.next = 91;
              break;
            }

            throw _iteratorError2;

          case 91:
            return _context.finish(88);

          case 92:
            return _context.finish(85);

          case 93:
            spinner.succeed("Files created.\n");

          case 94:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, this, [[9, 53, 57, 65], [19, 32, 36, 44], [37,, 39, 43], [58,, 60, 64], [70, 81, 85, 93], [86,, 88, 92]]);
  }));

  return function (_x5, _x6) {
    return _ref.apply(this, arguments);
  };
}();