import * as React from "react";
export interface Customization {
    name: string;
    haveBlock: boolean;
}
export declare const CustomizationContext: React.Context<Customization>;
export declare const useCustomization: () => Customization;
