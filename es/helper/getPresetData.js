const files = require("../data/files.json");

module.exports = (data, dataKey) => {
  const plugins = files.boilerplates[process.env.PRESET].presets;

  plugins.forEach(plugin => {
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
