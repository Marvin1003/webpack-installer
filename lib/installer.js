const fs = require("fs");
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
  const cliDefaults = cli.defaults;

  let res;
  (async function menu() {
    const result = [];
    do {
      res = await cliMenu(res);
      res && result.push(res[cliDefaults.name]);
    } while (!Array.isArray(res));
    generateConfig();
  })();

  async function generateConfig() {
    console.log(chalk.underline`\nGenerating your config\n`);

    if (res[0] === "Boilerplates") process.env.PRESET = res[1].toLowerCase();
    else process.env.PRESET = false;

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

    // CHECK FOR PACKAGE.JSON
    if (!fs.existsSync(path.resolve(process.cwd(), "package.json"))) {
      spinner.info("No package.json found");
      spinner.info("Generating package.json\n");
      shell.exec(`npm --prefix ${process.cwd()} init`);
      spinner.succeed("package.json created.");
    }

    dependencies();

    spinner = ora("Adding scripts to package.json").start();
    await updatePackage();
    spinner.succeed("Added scripts to package.json.");
  }
})();
