const fs = require("fs");
const path = require("path");
const chalk = require("chalk");
const files = require("../data/files.json");
const getPresetData = require("../helper/getPresetData");
const packageJSON = path.resolve(process.cwd(), "package.json");

module.exports = () => {
  fs.readFile(packageJSON, "utf-8", (err, data) => {
    if (err) throw err;
    
    const json = JSON.parse(data);

    const plugins = files.boilerplates[process.env.PRESET].presets;

    let scripts = {
      ...files.scripts
    };

    scripts = getPresetData(scripts, "script");

    const mergedScripts = Object.assign({}, json.scripts, scripts);

    json.scripts = mergedScripts;
    
    fs.writeFile(packageJSON, JSON.stringify(json, null, 2), "utf-8", err => {
      if (err) throw err;
    });
  });
};
