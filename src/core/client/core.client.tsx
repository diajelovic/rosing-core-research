import * as React from "react";
import * as ReactDom from "react-dom";
import { loadableReady } from "@loadable/component";

import { App } from "app/entrypoint";
import {
  Customization,
  CustomizationContext,
} from "utils/customization.context";

export const client = (customization: Customization, domNodeId: string) => {
  loadableReady(() => {
    ReactDom.hydrate(
      <CustomizationContext.Provider value={customization}>
        <App />
      </CustomizationContext.Provider>,
      document.getElementById(domNodeId)
    );
  });
};
