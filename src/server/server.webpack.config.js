const path = require("path");
const nodeExternals = require("webpack-node-externals");

module.exports = {
  mode: "development",
  entry: "./src/server/server.ts",
  module: {
    rules: [
      { test: /\.tsx?$/, exclude: /node_modules/, loader: "babel-loader" },
    ],
  },
  devtool: false,
  output: {
    path: path.resolve(__dirname, "../../build/server"),
    filename: "index.js",
  },
  target: "node", // in order to ignore built-in modules like path, fs, etc.
  externals: [
    nodeExternals(), // in order to ignore all modules in node_modules folder
    "react-dom/server",
    "react",
    {
      "rosing-core-server": "commonjs ../../lib/rosing-core-server",
    },
  ],
  node: {
    __dirname: true, // enable in node
  },
  resolve: {
    extensions: [".js", ".ts", ".tsx"],
  },
};
