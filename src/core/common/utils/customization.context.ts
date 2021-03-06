import * as React from "react";

export interface Customization {
  name: string;
  components: {
    header?: React.ComponentType;
    image?: React.ComponentType;
    footer?: React.ComponentType;
  };
  imageUrl?: string;
  haveBlock: boolean;
}

const defaultCustomization: Customization = {
  name: "default",
  components: {},
  haveBlock: false,
};

export const CustomizationContext = React.createContext(defaultCustomization);

export const useCustomization = () => React.useContext(CustomizationContext);
