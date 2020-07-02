import * as React from "react";
import loadable from "@loadable/component";

import { useCustomization } from "utils/customization.context";

const List = loadable(() => import("../components/list/list"));
const Block = loadable(() => import("../components/block/block"));
const Footer = loadable(() => import("../components/footer/footer"));
const Image = loadable(() => import("../components/image/image"));
const ImageBackground = loadable(() =>
  import("../components/image-background/image-background")
);

export const App = () => {
  const { name, haveBlock, components } = useCustomization();
  const CustomHeader = components?.header;
  const CustomFooter = components?.footer;
  const CustomImage = components?.image;

  return (
    <div>
      {CustomHeader && <CustomHeader />}
      {name}
      <List fallback={<div>Loading...</div>} />
      {haveBlock && <Block fallback={<div>Loading...</div>} />}
      <Image fallback={<div>Loading...</div>} />
      {CustomImage ? (
        <CustomImage />
      ) : (
        <ImageBackground fallback={<div>Loading...</div>} />
      )}
      {CustomFooter ? (
        <CustomFooter />
      ) : (
        <Footer fallback={<div>Loading...</div>} />
      )}
    </div>
  );
};
