const path = require("path");

module.exports = ({ mode, port }) => ({
  mode,
  devtool: "cheap-source-map",
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"]
      }
    ]
  },
  devServer: {
    contentBase: path.join(process.cwd(), "dist"),
    compress: true,
    port
  }
});
