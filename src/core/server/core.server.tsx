import * as React from "react";

import { App } from "common/entrypoint/entrypoint";
import {
  Customization,
  CustomizationContext,
} from "common/utils/customization.context";

export const server = (customization: Customization) => {
  return (
    <CustomizationContext.Provider value={customization}>
      <App />
    </CustomizationContext.Provider>
  );
};
