const fs = require("fs-extra");
const path = require("path");
const ora = require("ora");
const { execSync } = require("child_process");
const chalk = require("chalk");
const addPrefix = require("../helper/addPrefix");
const globalConfig = require("../../data/installer:global.json");
const packageJSON = path.resolve(process.cwd(), "package.json");

module.exports = config => {
  // Check if package.json already exists
  if (!fs.existsSync(packageJSON)) {
    const spinner = ora("Initalizing npm project").start();
    try {
      execSync("npm init -y", { cwd: process.cwd() });
      spinner.succeed(chalk("Npm project initialised.\n"));
    } catch (err) {
      spinner.fail(chalk("Failed initializing npm project.\n"));
      throw "I am so sorry ..";
    }
  }

  const json = fs.readFileSync(packageJSON, "utf-8");

  if (json) {
    const spinner = ora("Updating package.json").start();
    const data = JSON.parse(json);

    mergeData(config, true);
    mergeData(globalConfig, false);

    function mergeData(conf, localConf) {
      if (conf.hasOwnProperty("package") && typeof conf.package === "object") {
        for (const key in conf.package) {
          data[key] = Object.assign({}, conf.package[key], data[key]);
        }
      }

      if (
        localConf &&
        conf.hasOwnProperty("presets") &&
        Array.isArray(conf.presets)
      ) {
        for (const preset of conf.presets) {
          if (typeof preset === "object") {
            for (const presetDataKey in preset) {
              data[presetDataKey] = Object.assign(
                {},
                preset[presetDataKey],
                data[presetDataKey]
              );
            }
          } else {
            if (globalConfig.hasOwnProperty("presets")) {
              if (typeof globalConfig.presets[preset] === "object") {
                for (const presetDataKey in globalConfig.presets[preset]) {
                  data[presetDataKey] = Object.assign(
                    {},
                    globalConfig.presets[preset][presetDataKey],
                    data[presetDataKey]
                  );
                }
              }
            }
          }
        }
      }
    }

    addPrefix(data.scripts, process.env.GLOBAL_PREFIX);

    fs.writeFileSync(packageJSON, JSON.stringify(data, null, 2), "utf-8");

    spinner.succeed(chalk`Updated {green.bold package.json}.\n`);
  } else spinner.fail("Something went wrong.\n");
};
