const path = require("path");
const LoadablePlugin = require("@loadable/webpack-plugin");
const nodeExternals = require("webpack-node-externals");

module.exports = (env) => {
  const isDev = !env || !env.prod;

  return {
    entry: "./src/app/server/server.ts",
    output: {
      path: path.resolve(__dirname, "../../../build/server"),
      publicPath: "/public/",
      filename: "index.js",
    },
    mode: isDev ? "development" : "production",
    watch: isDev,
    devtool: false,
    target: "node", // in order to ignore built-in modules like path, fs, etc.
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
    node: {
      __dirname: true, // enable in node
    },
    externals: [
      nodeExternals(), // in order to ignore all modules in node_modules folder
      "react-dom/server",
      "react",
      {
        "rosing-core-server": "commonjs ../rosing-core-server",
      },
    ],
    resolve: {
      extensions: [".js", ".ts", ".tsx"],
      alias: {
        custom: path.resolve(__dirname, "../custom"),
      },
    },
    plugins: [new LoadablePlugin()],
  };
};
