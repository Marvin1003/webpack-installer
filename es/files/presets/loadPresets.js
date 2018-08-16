const webpackMerge = require("webpack-merge");

function applyPresets(env) {
  const { presets } = env;
  const mergedPresets = [].concat(...[presets]);
  const mergedConfigs = mergedPresets.map(presetName =>
    require(`./webpack.${presetName}`)(env)
  );

  return webpackMerge({}, ...mergedConfigs);
}

module.exports = applyPresets;
