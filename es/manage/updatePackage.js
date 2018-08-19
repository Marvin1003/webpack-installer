const fs = require("fs-extra");
const path = require("path");
const ora = require("ora");
const chalk = require("chalk");
const files = require("../../installer/files.json");
const addPrefix = require("../helper/addPrefix");
const getPresetData = require("../helper/getPresetData");
const packageJSON = path.resolve(process.cwd(), "package.json");

module.exports = () => {
  const data = fs.readFileSync(packageJSON, "utf-8");

  if (data) {
    console.log();
    const spinner = ora("Updating package.json").start();

    const json = JSON.parse(data);

    let scripts = {
      ...files.scripts
    };

    scripts = getPresetData(scripts, "script");

    addPrefix(scripts, process.env.PREFIX);

    process.env.SCRIPTS = Object.keys(scripts);

    const mergedScripts = Object.assign({}, json.scripts, scripts);

    json.scripts = mergedScripts;

    fs.writeFileSync(packageJSON, JSON.stringify(json, null, 2), "utf-8");

    spinner.succeed(chalk`Updated {green.bold package.json}.`);
  } else {
    spinner.fail("Something went wrong.\n");
  }
};
