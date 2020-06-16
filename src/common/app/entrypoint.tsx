import * as React from "react";
import loadable from "@loadable/component";

import { useCustomization } from "utils/customization.context";

const List = loadable(() => import("../components/list/list"));
const Block = loadable(() => import("../components/block/block"));

export const App = () => {
  const { name, haveBlock } = useCustomization();

  return (
    <div>
      {name}
      {/*<React.Suspense fallback={<div>Loading...</div>}>*/}
      <List fallback={<div>Loading...</div>} />
      {haveBlock && <Block fallback={<div>Loading...</div>} />}
      {/*</React.Suspense>*/}
    </div>
  );
};
