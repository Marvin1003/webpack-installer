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

process.env.PREFIX = "installer:";
process.env.SCRIPTS = [];

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
    generateConfig(res);
  })();

  async function generateConfig(configType) {
    const configStr = `${configType[configType.length - 2]} - ${
      configType[configType.length - 1]
    }`;

    console.log(chalk.underline(`\nCreating ${configStr} config.\n`));
    
    // CHECK IF PACKAGE.JSON EXISTS
    if (!fs.existsSync(path.resolve(process.cwd(), "package.json"))) {
      const spinner = ora("Initalizing npm project").start();
      execSync(`npm init -y`, { cwd: process.cwd() });
      spinner.succeed(chalk("Npm project initialised.\n"));
    }

    dependencies();
    updatePackage();

    await createFolder(prompt);
    await createStaticFiles(prompt, res);

    if (!fs.pathExistsSync(path.resolve(process.cwd(), "src"))) {
      const answer = await prompt({
        type: "confirm",
        message: chalk`Do you want to create {green.bold src/index.js}?`,
        name: "confirm"
      });
      if (answer.confirm) {
        fs.createFileSync("src/index.js");
        ora().info(chalk`File {green.bold src/index.js} created.`);
      }
    }

    console.log(chalk.underline("\nAvailable scripts:\n"));
    for (const script of process.env.SCRIPTS.split(",")) {
      console.log(chalk`npm run {green.bold ${script}}`);
    }
  }
})();
