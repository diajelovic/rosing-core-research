const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const LoadablePlugin = require("@loadable/webpack-plugin");
const CopyPlugin = require("copy-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const babelConfig = require("./client.babel.config.json");

module.exports = {
  entry: "./src/client/client.ts",
  output: {
    path: path.resolve(__dirname, "../../build/client/public"),
    publicPath: "/public/",
    filename: "bundle.js", // should be like in core-client.js
  },
  mode: "development",
  devtool: false,
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
    extensions: [".js", ".ts", ".tsx"],
    alias: {
      "rosing-core-client": path.resolve(
        __dirname,
        "../../lib/rosing-core-client"
      ),
      custom: path.resolve(__dirname, "../../src/custom"),
    },
  },
  plugins: [
    new LoadablePlugin({
      filename: "../loadable-stats.json",
    }),

    // for dev server only
    new HtmlWebpackPlugin({
      template: "src/common/assets/index.ejs",
      filename: "../index.html",
      templateParameters: {
        body: "<div>DEV</div>",
      },
    }),

    new CopyPlugin({
      patterns: [
        {
          from: "lib/rosing-core-client",
          to: "",
          globOptions: {
            ignore: ["**/loadable-stats.json"],
          },
        },
      ],
    }),

    new MiniCssExtractPlugin({
      filename: "css/[name].css",
      chunkFilename: "css/[id].css",
    }),
  ],
  devServer: {
    contentBase: path.join(__dirname, "../../build/client"),
    compress: true,
    port: 9000,
  },
};
