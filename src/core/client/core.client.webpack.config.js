const path = require("path");
const LoadablePlugin = require("@loadable/webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const babelConfig = require("./core.client.babel.config.json");

module.exports = {
  entry: "./src/core/client/core.client",
  output: {
    chunkFilename: "chunks/[name].js",
    path: path.resolve(__dirname, "../../../lib/rosing-core-client"),
    publicPath: "/public/",
    filename: "index.js",
    library: "default",
    libraryTarget: "commonjs2",
  },
  mode: "development",
  devtool: false,
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
      app: path.resolve(__dirname, "../../common/app"),
      utils: path.resolve(__dirname, "../../common/utils"),
      components: path.resolve(__dirname, "../../common/components"),
    },
  },
  plugins: [
    new LoadablePlugin(),
    new MiniCssExtractPlugin({
      filename: "css/[name].css",
      chunkFilename: "css/[id].css",
    }),
  ],
};
