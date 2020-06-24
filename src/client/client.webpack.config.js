const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CopyPlugin = require("copy-webpack-plugin");

const babelConfig = require("./client.babel.config.json");

module.exports = {
  mode: "development",
  entry: "./src/client/client.ts",
  output: {
    path: path.resolve(__dirname, "../../build/client"),
    filename: "public/index.js", // should be like in core-client.js
  },
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
    // for dev server only
    new HtmlWebpackPlugin({
      template: "src/common/assets/index.ejs",
      templateParameters: {
        body: "<div>DEV</div>",
      },
    }),

    new CopyPlugin({
      patterns: [
        { from: "lib/rosing-core-client/chunks", to: "public/chunks" },
      ],
    }),
  ],
  devServer: {
    contentBase: path.join(__dirname, "../../build/client"),
    compress: true,
    port: 9000,
  },
};
