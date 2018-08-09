const shell = require("shelljs");
const ora = require("ora");
const files = require("../data/files.json");
const getPresetData = require("../helper/getPresetData");

module.exports = () => {
  const spinner = ora("Installing dependencies\n").start();

  let devDependencies = [
    ...files.devDependencies,
    ...files.boilerplates[process.env.PRESET].devDependencies
  ];

  let dependencies = [
    ...files.dependencies,
    ...files.boilerplates[process.env.PRESET].dependencies
  ];

  devDependencies = getPresetData(devDependencies, "devDependencies");

  dependencies = getPresetData(dependencies, "dependencies");

  install(devDependencies, "--save-dev");
  install(dependencies, "");

  function install(dependency, flag) {
    if (Array.isArray(dependency)) {
      dependency = dependency.join(" ");
      shell.exec(`npm --prefix ${process.cwd()} install ${dependency} ${flag}`);
    }
  }

  console.log();
  spinner.succeed("Dependencies installed\n");
};
