const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin");

module.exports = ({ mode }) => ({
  mode,
  output: {
    filename: "static/commons/[name]/[name].js",
    chunkFilename: "chunks/[name]/[name].js",
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
      filename: "static/commons/[name]/[name].css",
      chunkFilename: "chunks/[name]/[name].css"
    }),
    new OptimizeCSSAssetsPlugin()
  ]
});
