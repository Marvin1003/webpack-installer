"use strict";

module.exports = function (data, prefix) {
  for (var key in data) {
    var tmp = data[key];
    delete data[key];
    data["".concat(prefix).concat(key)] = tmp;
  }
};