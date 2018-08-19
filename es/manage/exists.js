const fs = require("fs-extra");
const path = require("path");
const chalk = require("chalk");

module.exports = async (src, dest, spinner, prompt) => {
  src = path.resolve(process.cwd(), src);
  const resolvedDest = path.resolve(process.cwd(), dest);

  if (!fs.pathExistsSync(resolvedDest)) fs.copySync(src, resolvedDest);
  else {
    spinner.info(chalk`File {green.bold ${dest}} already exists.`);

    const answer = await prompt({
      type: "confirm",
      message: chalk`Do you want to overwrite {green.bold ${dest}}.`,
      name: "confirm"
    });

    if (answer.confirm) {
      fs.copySync(src, resolvedDest);
      spinner.succeed(chalk`File {green.bold ${dest}} has been overwritten.\n`);
    } else {
      spinner.info(chalk`Using current {green.bold ${dest}} file.\n`);
    }
  }
  spinner.clear();
};
