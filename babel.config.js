module.exports = (api) => {
  return {
    plugins: ["@babel/plugin-syntax-dynamic-import", "@loadable/babel-plugin"],
    presets: [
      [
        "@babel/preset-env",
        {
          useBuiltIns: "entry",
          corejs: 3,
          // caller.target will be the same as the target option from webpack
          targets: api.caller((caller) => {
            return caller && caller.target === "node";
          })
            ? { node: "current" }
            : {},
        },
      ],
      "@babel/preset-react",
      "@babel/preset-typescript",
    ],
  };
};
