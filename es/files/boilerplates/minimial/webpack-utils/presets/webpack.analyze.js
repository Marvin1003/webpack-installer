const BundleAnalyzerPlugin = require("webpack-bundle-analyzer")
  .BundleAnalyzerPlugin;

module.exports = ({ type }) => ({
  plugins: [new BundleAnalyzerPlugin(type)]
});
