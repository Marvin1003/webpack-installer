const fs = require("fs-extra");
const path = require("path");
const chalk = require("chalk");
const ora = require("ora");

module.exports = async () => {
  console.log();
  const spinner = ora("Creating folder structure");

  await Promise.all([
    checkFolderExists("webpack-utils"),
    checkFolderExists("webpack-utils/presets"),
    checkFolderExists("webpack-utils/configs", true)
  ]);

  spinner.succeed("Folder structure created.\n");

  async function checkFolderExists(folderPath, enter) {
    const dir = path.resolve(process.cwd(), folderPath);

    if (!fs.pathExistsSync(dir)) {
      fs.ensureDir(dir, err => {
        if (err) throw err;
      });
    } else {
      spinner.info(chalk`Folder {green.bold ${folderPath}} already exists.`);
      enter && console.log();
    }
    spinner.clear();
  }
};
