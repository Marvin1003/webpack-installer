const path = require("path");
const webpackMerge = require("webpack-merge");

const stats = require("./webpack-utils/stats");
const loadPresets = require("./webpack-utils/presets/loadPresets");

const HtmlWebpackPlugin = require("html-webpack-plugin");

const modeConfig = ({ mode, port }) =>
  require(`./webpack-utils/configs/webpack.${mode}`)({ mode, port });

module.exports = ({
  mode = "production",
  presets = [],
  options = "",
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
            use: "babel-loader"
          },
          {
            test: /\.(woff|woff2|ttf|eot)$/,
            use: {
              loader: "file-loader",
              options: {
                name: "[path][name].[ext]",
                outputPath: "static/fonts"
              }
            }
          },
          {
            test: /\.(jpg|jpeg|svg|png|gif)$/,
            use: {
              loader: "url-loader",
              options: {
                name: "[path][name].[ext]",
                outputPath: "static/images/"
              }
            }
          }
        ]
      },
      plugins: [new HtmlWebpackPlugin()]
    },
    modeConfig({ mode, port }),
    loadPresets({ mode, presets, options })
  );
