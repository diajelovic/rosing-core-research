import * as React from "react";
import * as ReactDom from "react-dom";

import { App } from "common/entrypoint/entrypoint";
import {
  Customization,
  CustomizationContext,
} from "common/utils/customization.context";

export const client = (customization: Customization, domNodeId: string) => {
  ReactDom.hydrate(
    <CustomizationContext.Provider value={customization}>
      <App />
    </CustomizationContext.Provider>,
    document.getElementById(domNodeId)
  );
};
