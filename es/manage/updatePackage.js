const fs = require("fs-extra");
const ora = require("ora");
const path = require("path");
const files = require("../../installer/files.json");
const addPrefix = require("../helper/addPrefix");
const getPresetData = require("../helper/getPresetData");
const packageJSON = path.resolve(process.cwd(), "package.json");

module.exports = () => {
  const prefix = "installer:";

  fs.readFile(packageJSON, "utf-8", (err, data) => {
    if (err) throw err;

    console.log();
    const spinner = ora("Updating package.json").start();

    const json = JSON.parse(data);

    let scripts = {
      ...files.scripts
    };

    scripts = getPresetData(scripts, "script");

    addPrefix(scripts, prefix);

    const mergedScripts = Object.assign({}, json.scripts, scripts);

    json.scripts = mergedScripts;

    fs.writeFile(packageJSON, JSON.stringify(json, null, 2), "utf-8", err => {
      if (err) throw err;

      console.log();
      spinner.succeed("Updated package.json\n");
    });
  });
};
