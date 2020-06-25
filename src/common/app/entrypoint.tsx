import * as React from "react";
import loadable from "@loadable/component";

import { useCustomization } from "utils/customization.context";

const List = loadable(() => import("../components/list/list"));
const Block = loadable(() => import("../components/block/block"));
const Footer = loadable(() => import("../components/footer/footer"));

export const App = () => {
  const { name, haveBlock, components } = useCustomization();
  const CustomHeader = components?.header;
  const CustomFooter = components?.footer;

  return (
    <div>
      {CustomHeader && <CustomHeader />}
      {name}
      <List fallback={<div>Loading...</div>} />
      {haveBlock && <Block fallback={<div>Loading...</div>} />}
      {CustomFooter ? (
        <CustomFooter />
      ) : (
        <Footer fallback={<div>Loading...</div>} />
      )}
    </div>
  );
};
