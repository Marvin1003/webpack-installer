const fs = require("fs-extra");
const path = require("path");
const ora = require("ora");

const exists = require("./exists");

async function checkFile(dir, dest, spinner, prompt) {
  for (const file of fs.readdirSync(dir)) {
    await exists(
      path.resolve(dir, file),
      `webpack-utils/${dest}/${file}`,
      spinner,
      prompt
    );
  }
}

module.exports = async (prompt, input) => {
  const spinner = ora("Creating files").start();

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

  const boilerplateSRC = path.resolve(
    __dirname,
    `../../configs/${process.env.CONFIG}/`
  );

  for (const item of fs.readdirSync(boilerplateSRC)) {
    const src = path.resolve(boilerplateSRC, item);
    const stats = fs.statSync(src);
    if (stats.isDirectory()) {
      for (const elem of fs.readdirSync(src)) {
        const utilPath = path.resolve(src, elem);

        switch (elem) {
          case "configs": {
            await checkFile(utilPath, "configs", spinner, prompt);
            break;
          }
          case "presets": {
            await checkFile(utilPath, "presets", spinner, prompt);
            break;
          }
        }
      }
    } else if (stats.isFile()) {
      await exists(src, item, spinner, prompt);
    }
  }
  spinner.succeed("Files created.\n");
};
