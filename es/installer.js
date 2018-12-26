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
const createStaticFiles = require("./manage/staticFiles");

process.env.GLOBAL_PREFIX = "installer:";
process.env.SCRIPTS = [];

(async function setup() {
  if ("clear" in global.console) console.clear();

  console.log(chalk.green(figlet.textSync("webpack  -  installer")));
  console.log(chalk`\nWelcome to {green.bold webpack-installer}!\n`);

  const cliMenu = cli.generateMenu(prompt);

  let res;
  (async function menu() {
    do {
      res = await cliMenu(res);
    } while (!Array.isArray(res));

    const boilerplate = res.map(input => input.toLowerCase()).join("/");

    process.env.BOILERPLATE_FOLDER = path.resolve(
      __dirname,
      `../configs/${boilerplate}`
    );
    process.env.CONFIG_PATH = path.resolve(
      __dirname,
      `${process.env.BOILERPLATE_FOLDER}/installer:config.json`
    );

    generateConfig(res);
  })();

  async function generateConfig(configType) {
    const config = await import(process.env.CONFIG_PATH);

    const configStr = `${configType[configType.length - 2]} - ${
      configType[configType.length - 1]
    }`;

    console.log(chalk.underline(`\nCreating ${configStr} config.\n`));

    updatePackage(config);

    // Install dependencies
    var answer = await prompt({
      type: "confirm",
      message: chalk`Do you want to install the dependencies?`,
      name: "confirm"
    });

    if (answer.confirm) {
      console.log();
      try {
        execSync("npm install --silent", {
          cwd: process.cwd(),
          stdio: "inherit"
        });
        ora().succeed(chalk`Dependencies installed`);
      } catch(err) {
        ora().fail(chalk`Failed installing dependencies. Try 'npm install' afterwards.`)
       }
    }

    await createFolder(prompt);
    await createStaticFiles(prompt, configType[configType.length - 1], config);

    // Ask user if he wants to create a index.js if not already there
    if (!fs.pathExistsSync(path.resolve(process.cwd(), "src"))) {
      var answer = await prompt({
        type: "confirm",
        message: chalk`Do you want to create {green.bold src/index.js}?`,
        name: "confirm"
      });
      if (answer.confirm) {
        fs.createFileSync("src/index.js");
        ora().info(chalk`File {green.bold src/index.js} created.`);
      }
    }

    // Display available scripts
    const packageJson = await import(path.resolve(process.cwd(), 'package.json'));

    console.log(chalk.underline("\nAvailable scripts:\n"));
    for (const script of Object.keys(packageJson.scripts)) {
      console.log(chalk`npm run {green.bold ${script}}`);
    }
  }
})();
