const BundleAnalyzerPlugin = require("webpack-bundle-analyzer")
  .BundleAnalyzerPlugin;

module.exports = ({ options }) => ({
  plugins: [new BundleAnalyzerPlugin(options)]
});
