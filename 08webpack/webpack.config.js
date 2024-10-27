const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  mode: "production", // 或 'production'
  entry: "./index.ts",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js",
  },
  resolve: {
    extensions: [".js", ".ts", ".json", ".cjs"],
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        loader: "ts-loader",
      },
      {
        test: /\.(png|jpg|gif)$/,
        loader: "asset/resource",
      },
    ],
  },
  devServer: {
    static: {
      directory: path.resolve(__dirname, "./dist"),
    },
    port: 9000,
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./index.html",
    }),
  ],
};
