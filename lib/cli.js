"use strict";

var json = require("../data/installer:setup.json");

var findNextMenu = require("./helper/findNextMenu");

var result = [];
var defaults = {
  initialMessage: "Menu",
  type: "list",
  name: "input"
};
module.exports.defaults = defaults;

module.exports.generateMenu = function (prompt) {
  return function nextMenu(res) {
    res && result.push(res[defaults.name]);
    var data = res ? findNextMenu(res[defaults.name], json) : json;
    var list = data.nested ? data.nested : data;
    var choices = {
      type: data.type || defaults.type,
      name: defaults.name,
      message: data.message || defaults.initialMessage,
      choices: list.map(function (elem) {
        return elem[defaults.name] ? elem[defaults.name] : "";
      })
    };
    return choices.choices.length > 0 ? prompt(choices, result) : result;
  };
};