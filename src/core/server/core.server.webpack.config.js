const path = require("path");
const LoadablePlugin = require("@loadable/webpack-plugin");
const nodeExternals = require("webpack-node-externals");

const babelConfig = require("./core.server.babel.config.json");

module.exports = {
  entry: "./src/core/server/core.server",
  output: {
    chunkFilename: "chunks/[name].js",
    path: path.resolve(__dirname, "../../../lib/rosing-core-server"),
    filename: "index.js",
    library: "default",
    libraryTarget: "commonjs2",
  },
  mode: "development",
  devtool: false,
  target: "node",
  externals: ["@loadable/component", nodeExternals()],
  module: {
    rules: [
      {
        test: /\.[j|t]sx?$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: babelConfig,
        },
      },
    ],
  },
  resolve: {
    extensions: [".js", ".ts", ".tsx"],
    alias: {
      app: path.resolve(__dirname, "../../common/app"),
      utils: path.resolve(__dirname, "../../common/utils"),
      components: path.resolve(__dirname, "../../common/components"),
    },
  },
  plugins: [new LoadablePlugin()],
};
