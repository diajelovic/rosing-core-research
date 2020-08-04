const path = require("path");
const LoadablePlugin = require("@loadable/webpack-plugin");
const nodeExternals = require("webpack-node-externals");

module.exports = (isDev) => ({
  entry: "./src/core/server/core.server",
  output: {
    chunkFilename: "chunks/[name].js",
    path: path.resolve(__dirname, "../../../build/rosing-core-server"),
    publicPath: "/public/",
    filename: "index.js",
    library: "default",
    libraryTarget: "commonjs2",
  },
  mode: isDev ? "development" : "production",
  watch: isDev,
  devtool: false,
  target: "node",
  node: {
    __dirname: true, // enable in node
  },
  externals: ["@loadable/component", nodeExternals()],
  module: {
    rules: [
      {
        test: /\.[j|t]sx?$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
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
        exclude: /node_modules/,
        use: {
          loader: "file-loader",
          options: {
            name: "assets/[name].[ext]",
          },
        },
      },
    ],
  },
  resolve: {
    extensions: [".js", ".ts", ".tsx"],
    alias: {
      common: path.resolve(__dirname, "../common"),
    },
  },
  plugins: [new LoadablePlugin()],
});
