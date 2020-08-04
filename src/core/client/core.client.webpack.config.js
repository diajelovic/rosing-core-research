const path = require("path");
const LoadablePlugin = require("@loadable/webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = (isDev) => ({
  entry: "./src/core/client/core.client",
  output: {
    chunkFilename: "chunks/[name].js",
    path: path.resolve(__dirname, "../../../build/rosing-core-client"),
    publicPath: "/public/",
    filename: "index.js",
    library: "default",
    libraryTarget: "commonjs2",
  },
  mode: isDev ? "development" : "production",
  watch: isDev,
  devtool: false,
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
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: "css-loader",
            options: {
              modules: {
                localIdentName: "[local]--[hash:base64:5]",
              },
            },
          },
        ],
      },
      {
        test: /\.(jpg|jpeg|woff|woff2)$/,
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
    extensions: [".js", ".ts", ".tsx", ".css"],
    alias: {
      common: path.resolve(__dirname, "../common"),
    },
  },
  plugins: [
    new LoadablePlugin(),
    new MiniCssExtractPlugin({
      filename: "css/[name].css",
      chunkFilename: "css/[id].css",
    }),
  ],
});
