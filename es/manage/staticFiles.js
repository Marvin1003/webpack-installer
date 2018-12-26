const fs = require("fs-extra");
const path = require("path");
const ora = require("ora");
const _ = require("lodash");
const exists = require("./exists");

module.exports = async (prompt, configName, { presets = [] }) => {
  const spinner = ora("Creating files").start();

  // OBLIGATORY GLOBAL FILES
  await exists(
    path.resolve(__dirname, "../../configs/presets/loadPresets.js"),
    "webpack-utils/presets/loadPresets.js",
    spinner,
    prompt
  );

  await exists(
    path.resolve(__dirname, "../../configs/stats.js"),
    "webpack-utils/stats.js",
    spinner,
    prompt
  );

  // BOILERPLATE RELATED FILES
  await createFiles(process.env.BOILERPLATE_FOLDER);

  async function createFiles(dir) {
    const stats = fs.statSync(dir);
    if (stats.isDirectory()) {
      for (const item of fs.readdirSync(dir)) {
        const utilPath = path.resolve(dir, item);
        await createFiles(utilPath);
      }
    } else if (stats.isFile()) {
      let pathArr = dir.split("/");

      const wi = pathArr.indexOf("webpack-installer");
      pathArr = pathArr.slice(wi);

      const i = pathArr.indexOf(configName.toLowerCase());
      const dest = pathArr.slice(i + 1).join("/");
      await exists(dir, dest, spinner, prompt);
    }
  }

  // GLOBAL PRESETS
  for (const preset of presets) {
    if (typeof preset === "string") {
      await exists(
        path.resolve(__dirname, `../../configs/presets/${preset}`),
        `webpack-utils/presets/${preset}`,
        spinner,
        prompt
      );
    }
  }

  spinner.succeed("Files created.\n");
};
