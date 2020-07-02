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
export declare const CustomizationContext: React.Context<Customization>;
export declare const useCustomization: () => Customization;
