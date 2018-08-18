const fs = require("fs-extra");
const path = require("path");
const { execSync } = require("child_process");
const chalk = require("chalk");
const figlet = require("figlet");
const ora = require("ora");

const inquirer = require("inquirer");
const prompt = inquirer.createPromptModule();

const cli = require("./cli");
const createFolder = require("./manage/folder");
const updatePackage = require("./manage/updatePackage");
const dependencies = require("./manage/dependencies");
const createStaticFiles = require("./manage/staticFiles");

(async function setup() {
  console.clear();
  console.log(chalk.green(figlet.textSync("webpack  -  installer")));
  console.log(chalk`\nWelcome to {green.bold webpack-installer}!\n`);

  const cliMenu = cli.generateMenu(prompt);

  let res;
  (async function menu() {
    do {
      res = await cliMenu(res);
    } while (!Array.isArray(res));

    const path = res.map(input => input.toLowerCase()).join("/");
    process.env.CONFIG = path;
    generateConfig();
  })();

  async function generateConfig(result) {
    console.log(chalk.underline`\nGenerating your config\n`);

    let spinner = ora().start();

    spinner.info("Generating folder structure ...\n");
    await createFolder(prompt);
    console.log();
    spinner.succeed("Folder structure generated.\n");

    spinner.info("Generating static files ...\n");
    await createStaticFiles(prompt, res);
    console.log();
    spinner.succeed("Static files generated.\n");

    spinner.clear();

    // CHECK IF PACKAGE.JSON EXISTS
    if (!fs.existsSync(path.resolve(process.cwd(), "package.json"))) {
      spinner.info("No package.json found");
      spinner.info("Generating package.json.");
      execSync(`npm --prefix ${process.cwd()} init -y`);
      spinner.succeed("package.json created.\n");
    }

    dependencies();

    await updatePackage();
  }
})();
