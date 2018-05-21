import { IColorLayer } from "./IColorLayer";

/*
    The current set of cached and active layers as well as the seed colors used to calculate values
*/
export interface IColorPalette {
    // seed colors
    foreground: string;
    background: string;
    theme: string;

    // layer caches
    neutralLayers: Array<IColorLayer>;
    themeLayers: Array<IColorLayer>;
    customLayers: Map<string, IColorLayer>;
}