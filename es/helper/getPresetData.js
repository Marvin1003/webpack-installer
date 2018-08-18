const _ = require("lodash");
const files = require("../../installer/files.json");

module.exports = (data, dataKey) => {
  const plugins = _.get(files, process.env.CONFIG.split("/")).presets;

  Array.isArray(plugins) && plugins.forEach(plugin => {
    files.presets.forEach(preset => {
      if (preset.name === plugin && Boolean(preset[dataKey])) {
        if (Array.isArray(data)) {
          const value = Array.isArray(preset[dataKey])
            ? preset[dataKey]
            : [preset[dataKey]];
          data = [...data, ...value];
        } else data = { ...data, ...preset[dataKey] };
      }
    });
  });

  return data;
};
