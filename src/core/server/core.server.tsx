import * as React from "react";

import { App } from "app/entrypoint";
import {
  Customization,
  CustomizationContext,
} from "utils/customization.context";

export const server = (customization: Customization) => {
  return (
    <CustomizationContext.Provider value={customization}>
      <App />
    </CustomizationContext.Provider>
  );
};
