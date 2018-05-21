import { IColorLayerKey } from "./IColorLayerKey";

/*
    The theme inputs are the set of things that can be specified at a given level for the theme 
*/
export interface IThemeInputs {
    foreground?: string;            // foreground color override
    background?: string;            // background color override
    themeColor?: string;            // theme color override
    themeStyle?: string;            // name of a registered theme style object
    defaultLayer?: IColorLayerKey;  // change the default layer in the theme
}
