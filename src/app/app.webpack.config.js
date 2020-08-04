const clientConfig = require("./client/client.webpack.config");
const serverConfig = require("./server/server.webpack.config");

module.exports = (env) => {
  return [clientConfig(env), serverConfig(env)];
};
