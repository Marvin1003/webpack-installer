const json = require("../installer/setup.json");
const findNextMenu = require("./helper/findNextMenu");

const result = [];

const defaults = {
  initialMessage: "Menu",
  type: "list",
  name: "input"
};

module.exports.defaults = defaults;

module.exports.generateMenu = (prompt) => function nextMenu(res) {
  res && result.push(res[defaults.name]);

  const data = res ? findNextMenu(res[defaults.name], json) : json;

  const list = data.nested ? data.nested : data;

  const choices = {
    type: data.type || defaults.type,
    name: defaults.name,
    message: data.message || defaults.initialMessage,
    choices: list.map(elem => (elem[defaults.name] ? elem[defaults.name] : ""))
  };

  return choices.choices.length > 0 ? prompt(choices, result) : result;
};
