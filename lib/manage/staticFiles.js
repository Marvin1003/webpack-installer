"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var fs = require("fs-extra");

var path = require("path");

var ora = require("ora");

var _ = require("lodash");

var exists = require("./exists");

module.exports =
/*#__PURE__*/
function () {
  var _ref2 = (0, _asyncToGenerator2.default)(
  /*#__PURE__*/
  _regenerator.default.mark(function _callee2(prompt, configName, _ref) {
    var _ref$presets, presets, spinner, createFiles, _createFiles, _iteratorNormalCompletion, _didIteratorError, _iteratorError, _iterator, _step, preset;

    return _regenerator.default.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _createFiles = function _ref4() {
              _createFiles = (0, _asyncToGenerator2.default)(
              /*#__PURE__*/
              _regenerator.default.mark(function _callee(dir) {
                var stats, _iteratorNormalCompletion2, _didIteratorError2, _iteratorError2, _iterator2, _step2, item, utilPath, pathArr, wi, i, dest;

                return _regenerator.default.wrap(function _callee$(_context) {
                  while (1) {
                    switch (_context.prev = _context.next) {
                      case 0:
                        stats = fs.statSync(dir);

                        if (!stats.isDirectory()) {
                          _context.next = 31;
                          break;
                        }

                        _iteratorNormalCompletion2 = true;
                        _didIteratorError2 = false;
                        _iteratorError2 = undefined;
                        _context.prev = 5;
                        _iterator2 = fs.readdirSync(dir)[Symbol.iterator]();

                      case 7:
                        if (_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done) {
                          _context.next = 15;
                          break;
                        }

                        item = _step2.value;
                        utilPath = path.resolve(dir, item);
                        _context.next = 12;
                        return createFiles(utilPath);

                      case 12:
                        _iteratorNormalCompletion2 = true;
                        _context.next = 7;
                        break;

                      case 15:
                        _context.next = 21;
                        break;

                      case 17:
                        _context.prev = 17;
                        _context.t0 = _context["catch"](5);
                        _didIteratorError2 = true;
                        _iteratorError2 = _context.t0;

                      case 21:
                        _context.prev = 21;
                        _context.prev = 22;

                        if (!_iteratorNormalCompletion2 && _iterator2.return != null) {
                          _iterator2.return();
                        }

                      case 24:
                        _context.prev = 24;

                        if (!_didIteratorError2) {
                          _context.next = 27;
                          break;
                        }

                        throw _iteratorError2;

                      case 27:
                        return _context.finish(24);

                      case 28:
                        return _context.finish(21);

                      case 29:
                        _context.next = 39;
                        break;

                      case 31:
                        if (!stats.isFile()) {
                          _context.next = 39;
                          break;
                        }

                        pathArr = dir.split("/");
                        wi = pathArr.indexOf("webpack-installer");
                        pathArr = pathArr.slice(wi);
                        i = pathArr.indexOf(configName.toLowerCase());
                        dest = pathArr.slice(i + 1).join("/");
                        _context.next = 39;
                        return exists(dir, dest, spinner, prompt);

                      case 39:
                      case "end":
                        return _context.stop();
                    }
                  }
                }, _callee, this, [[5, 17, 21, 29], [22,, 24, 28]]);
              }));
              return _createFiles.apply(this, arguments);
            };

            createFiles = function _ref3(_x4) {
              return _createFiles.apply(this, arguments);
            };

            _ref$presets = _ref.presets, presets = _ref$presets === void 0 ? [] : _ref$presets;
            spinner = ora("Creating files").start(); // OBLIGATORY GLOBAL FILES

            _context2.next = 6;
            return exists(path.resolve(__dirname, "../../configs/presets/loadPresets.js"), "webpack-utils/presets/loadPresets.js", spinner, prompt);

          case 6:
            _context2.next = 8;
            return exists(path.resolve(__dirname, "../../configs/stats.js"), "webpack-utils/stats.js", spinner, prompt);

          case 8:
            _context2.next = 10;
            return createFiles(process.env.BOILERPLATE_FOLDER);

          case 10:
            // GLOBAL PRESETS
            _iteratorNormalCompletion = true;
            _didIteratorError = false;
            _iteratorError = undefined;
            _context2.prev = 13;
            _iterator = presets[Symbol.iterator]();

          case 15:
            if (_iteratorNormalCompletion = (_step = _iterator.next()).done) {
              _context2.next = 23;
              break;
            }

            preset = _step.value;

            if (!(typeof preset === "string")) {
              _context2.next = 20;
              break;
            }

            _context2.next = 20;
            return exists(path.resolve(__dirname, "../../configs/presets/".concat(preset)), "webpack-utils/presets/".concat(preset), spinner, prompt);

          case 20:
            _iteratorNormalCompletion = true;
            _context2.next = 15;
            break;

          case 23:
            _context2.next = 29;
            break;

          case 25:
            _context2.prev = 25;
            _context2.t0 = _context2["catch"](13);
            _didIteratorError = true;
            _iteratorError = _context2.t0;

          case 29:
            _context2.prev = 29;
            _context2.prev = 30;

            if (!_iteratorNormalCompletion && _iterator.return != null) {
              _iterator.return();
            }

          case 32:
            _context2.prev = 32;

            if (!_didIteratorError) {
              _context2.next = 35;
              break;
            }

            throw _iteratorError;

          case 35:
            return _context2.finish(32);

          case 36:
            return _context2.finish(29);

          case 37:
            spinner.succeed("Files created.\n");

          case 38:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2, this, [[13, 25, 29, 37], [30,, 32, 36]]);
  }));

  return function (_x, _x2, _x3) {
    return _ref2.apply(this, arguments);
  };
}();