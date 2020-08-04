import * as React from "react";

import image from "./red.jpg";
import { useCustomization } from "common/utils/customization.context";

const Image = () => {
  const { imageUrl } = useCustomization();

  return (
    <div>
      {imageUrl ? "CUSTOM" : "DEFAULT"} URL IMAGE
      <img
        style={{ display: "block", width: "100px", height: "100px" }}
        src={imageUrl || image}
        alt=""
      />
    </div>
  );
};

export default Image;
