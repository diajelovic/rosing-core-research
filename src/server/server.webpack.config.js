const path = require("path");
const LoadablePlugin = require("@loadable/webpack-plugin");
const nodeExternals = require("webpack-node-externals");

const babelConfig = require("./server.babel.config.json");

module.exports = {
  mode: "development",
  entry: "./src/server/server.ts",
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: babelConfig,
        },
      },
      {
        test: /\.module\.css$/i,
        exclude: /node_modules/,
        loader: "css-loader",
        options: {
          import: false,
          modules: {
            localIdentName: "[local]--[hash:base64:5]",
          },
          onlyLocals: true,
        },
      },
      {
        test: /\.(jpg|woff|woff2)$/,
        use: {
          loader: "file-loader",
          options: {
            name: "assets/[name].[ext]",
          },
        },
      },
    ],
  },
  devtool: false,
  output: {
    path: path.resolve(__dirname, "../../build/server"),
    publicPath: "/public/",
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
    alias: {
      custom: path.resolve(__dirname, "../../src/custom"),
    },
  },
  plugins: [new LoadablePlugin()],
};
