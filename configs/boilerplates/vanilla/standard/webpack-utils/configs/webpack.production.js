const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin");

module.exports = ({ mode }) => ({
  mode,
  output: {
    filename: "static/commons/[name]/[name].[contenthash].js",
    chunkFilename: "chunks/[name]/[name].[contenthash].js",
    publicPath: "/"
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, "css-loader"]
      }
    ]
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: "static/commons/[name]/[name].[contenthash].css",
      chunkFilename: "chunks/[name]/[name].[contenthash].css"
    }),
    new OptimizeCSSAssetsPlugin()
  ]
});
