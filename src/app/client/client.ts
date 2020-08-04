import { client } from "rosing-core-client";
import { loadableReady } from "@loadable/component";

import customization from "custom";

loadableReady(() => {
  client(customization, "app");
});

console.log(customization);
