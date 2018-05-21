import { IColorBase, IColorPair, ICustomColor } from "./ColorTypes";

/*
    A given color layer.  This contains the core colors, optional colors calculated for controls
    as well as references to alternate state values for this layer.  Also created on demand.
*/
export interface IColorLayer {
    // color values, created on demand
    foreground: string;
    background: string;
    stroke: string;

    // references to alternate state layers, created or linked on request
    hovered?: IColorLayer;
    pressed?: IColorLayer;
    selected?: IColorLayer;
    disabled?: IColorLayer;

    // map for custom values
    customColors?: Map<string, ICustomColor>;
}
