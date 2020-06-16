import * as React from "react";

export interface Customization {
  name: string;
  haveBlock: boolean;
}

const defaultCustomization: Customization = {
  name: "default",
  haveBlock: false,
};

export const CustomizationContext = React.createContext(defaultCustomization);

export const useCustomization = () => React.useContext(CustomizationContext);
