const CleanWebpackPlugin = require("clean-webpack-plugin");

module.exports = ({ options }) => ({
  plugins: [new CleanWebpackPlugin(options, { root: process.cwd() })]
});
