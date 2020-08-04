const clientConfig = require("./client/core.client.webpack.config");
const serverConfig = require("./server/core.server.webpack.config");

module.exports = (env) => {
  const isDev = !env || !env.prod;

  return [clientConfig(isDev), serverConfig(isDev)];
};
