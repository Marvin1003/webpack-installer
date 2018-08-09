const fs = require("fs");
const path = require("path");
const chalk = require("chalk");

module.exports = async (src, dest, spinner, prompt) => {
  src = path.resolve(process.cwd(), src);
  const resolvedDest = path.resolve(process.cwd(), dest);

  if (!fs.existsSync(resolvedDest)) {
    fs.copyFileSync(src, resolvedDest);
    spinner.succeed(chalk`File {green.bold ${dest}} generated.`);
  } else {
    spinner.info(chalk`File {green.bold ${dest}} already exists.`);

    const answer = await prompt({
      type: "confirm",
      message: chalk`Do you want to overwrite {green.bold ${dest}}.`,
      name: "confirm"
    });

    if (answer.confirm) {
      fs.copyFileSync(src, resolvedDest);
      spinner.succeed(chalk`File {green.bold ${dest}} has been overwritten.\n`);
    } else {
      spinner.info(chalk`Using current {green.bold ${dest}} file.\n`);
    }
  }
  spinner.clear();
};
