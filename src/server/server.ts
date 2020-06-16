import express from "express";
import fs from "fs";
import path from "path";
import util from "util";
import { template } from "lodash";
import { renderToString } from "react-dom/server";
import { ChunkExtractor } from "@loadable/server";

import { server } from "rosing-core-server";

const app = express();
const port = 3000;
const templatePath = path.resolve(
  __dirname,
  "../../src/common/assets/server.ejs"
);
const fsReadFile = util.promisify(fs.readFile);

const webStats = path.resolve(
  __dirname,
  "../../lib/rosing-core-client/loadable-stats.json"
);

app.use(
  "/public",
  express.static(path.resolve(__dirname, "../../build/client/public"))
);

app.get("/", async (req, res) => {
  const webExtractor = new ChunkExtractor({ statsFile: webStats });
  const jsx = webExtractor.collectChunks(
    server({ name: "HELLO!!", haveBlock: true })
  );
  const htmlTemplate = await fsReadFile(templatePath);
  const html = template(htmlTemplate.toString())({
    body: renderToString(jsx),
    scriptTags: webExtractor.getScriptTags(),
    linkTags: webExtractor.getLinkTags(),
    styleTags: webExtractor.getStyleTags(),
  });

  return res.send(html);
});

app.listen(port, () =>
  console.log(`Example app listening at http://localhost:${port}`)
);
