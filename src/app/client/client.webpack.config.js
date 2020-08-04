const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const LoadablePlugin = require("@loadable/webpack-plugin");
const CopyPlugin = require("copy-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = (env) => {
  const isDev = !env || !env.prod;
  return {
    entry: "./src/app/client/client.ts",
    output: {
      path: path.resolve(__dirname, "../../../build/client/public"),
      publicPath: "/public/",
      filename: "bundle.js", // should be like in core-client.js
    },
    mode: isDev ? "development" : "production",
    watch: isDev,
    devtool: false,
    module: {
      rules: [
        {
          test: /\.tsx?$/,
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
      extensions: [".js", ".ts", ".tsx"],
      alias: {
        "rosing-core-client": path.resolve(
          __dirname,
          "../../../build/rosing-core-client"
        ),
        custom: path.resolve(__dirname, "../custom"),
      },
    },
    plugins: [
      new LoadablePlugin({
        filename: "../loadable-stats.json",
      }),

      // for dev server only
      new HtmlWebpackPlugin({
        template: "src/app/assets/index.ejs",
        filename: "../index.html",
        templateParameters: {
          body: "<div>DEV</div>",
        },
      }),

      new CopyPlugin({
        patterns: [
          {
            from: "build/rosing-core-client",
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
      contentBase: path.join(__dirname, "../../../build/client"),
      compress: true,
      port: 9000,
    },
  };
};
