"use strict";

var MiniCssExtractPlugin = require("mini-css-extract-plugin");
var OptimizeCssAssetsPlugin = require("optimize-css-assets-webpack-plugin");

module.exports = function (_ref) {
  var mode = _ref.mode;
  return {
    mode: mode,
    module: {
      rules: [{
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, "css-loader"]
      }]
    },
    plugins: [new MiniCssExtractPlugin({
      filename: "[name].css",
      chunkFilename: "[id].css"
    }), new OptimizeCssAssetsPlugin({
      cssProcessor: require("cssnano"),
      cssProcessorOptions: {
        safe: true,
        discardComments: { removeAll: true }
      },
      canPrint: true
    })]
  };
};