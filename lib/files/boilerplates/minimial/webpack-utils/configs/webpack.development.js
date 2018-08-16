"use strict";

var path = require("path");

module.exports = function (_ref) {
  var mode = _ref.mode,
      port = _ref.port;
  return {
    mode: mode,
    devtool: "cheap-source-map",
    module: {
      rules: [{
        test: /\.css$/,
        use: ["style-loader", "css-loader"]
      }]
    },
    devServer: {
      compress: true,
      port: port
    }
  };
};