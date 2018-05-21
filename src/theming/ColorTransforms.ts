import { IColorLayerKey } from "./IColorLayerKey";
import { IThemeContext } from "./IThemeContext";
import { IColorLayer } from "./IColorLayer";

/*
    A layer generator function returns a new IColorLayer for the specified layer.
    This needs to work without any context beyond what is in the theme.  This will
    then become a slotted or named layer
*/
export interface ILayerGeneratorProps {
    targetKey: IColorLayerKey;
    theme: IThemeContext;
}

/*
    A layer transform function returns an IColorLayer (which may be a reference)
    to an existing layer, but it does the work off of a base layer.  The result
    will not be a named layer unless it is already one.
*/
export interface ILayerTransformProps {
    baseKey: IColorLayerKey;
    baseLayer: IColorLayer;
    theme: IThemeContext;
}

/*
    A custom color transform returns an IColorCustom
*/
export interface ICustomColorTransformProps {
    colorName: string;
    colorType: string;
    baseLayer: IColorLayer;
    theme: IThemeContext;
}