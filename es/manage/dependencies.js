const _ = require("lodash");
const { execSync } = require("child_process");
const ora = require("ora");
const files = require("../../installer/files.json");
const getPresetData = require("../helper/getPresetData");

module.exports = () => {
  const spinner = ora("Installing dependencies").start();
  console.log();

  let devDependencies = [
    ...files.devDependencies,
    ..._.get(files, process.env.CONFIG.split("/")).devDependencies
  ];

  let dependencies = [
    ...files.dependencies,
    ..._.get(files, process.env.CONFIG.split("/")).dependencies
  ];

  devDependencies = getPresetData(devDependencies, "devDependencies");

  dependencies = getPresetData(dependencies, "dependencies");

  install(devDependencies, "--save-dev");
  install(dependencies, "--save-prod");

  function install(dependencies, flag) {
    if (Array.isArray(dependencies))
      execSync(`npm install ${dependencies.join(" ")} ${flag} --silent`, {
        cwd: process.cwd()
      });
  }

  spinner.succeed("Dependencies installed");
};
