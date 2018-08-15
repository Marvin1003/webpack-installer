const path = require("path");
const webpackMerge = require("webpack-merge");

const stats = require("./webpack-utils/stats");
const loadPresets = require("./webpack-utils/presets/loadPresets");

const modeConfig = ({ mode, port }) =>
  require(`./webpack-utils/configs/webpack.${mode}`)({ mode, port });

module.exports = ({
  mode = "production",
  presets = [],
  type = "",
  port = 3000
}) =>
  webpackMerge(
    {
      mode,
      stats,
      module: {
        rules: [
          {
            test: /\.js$/,
            include: path.resolve(__dirname, "src"),
            use: {
              loader: "babel-loader",
              options: {
                presets: ["env"]
              }
            }
          }
        ]
      }
    },
    modeConfig({ mode, port }),
    loadPresets({ mode, presets, type })
  );
