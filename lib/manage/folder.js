const fs = require("fs");
const path = require("path");
const chalk = require("chalk");
const ora = require("ora");

module.exports = () => {
  const spinner = ora("Generating folder structure").start();

  checkFolderExists("webpack-utils");
  checkFolderExists("webpack-utils/presets");
  checkFolderExists("webpack-utils/configs");

  function checkFolderExists(folderPath) {
    const dir = path.resolve(process.cwd(), folderPath);

    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir);
      spinner.succeed(chalk`Folder {green.bold ${folderPath}} generated.`);
    } else {
      spinner.info(chalk`Folder {green.bold ${folderPath}} already exists.`);
    }
    spinner.clear();
  }
};
