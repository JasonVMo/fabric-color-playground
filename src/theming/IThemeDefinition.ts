import { ILayerTransformProps, ICustomColorTransformProps, ILayerGeneratorProps } from "./ColorTransforms";
import { ICustomColor } from "./ColorTypes";
import { IColorLayerKey } from "./IColorLayerKey";
import { IColorLayer } from "./IColorLayer";

export interface IThemeDefinition {
    highContrast: boolean;
    backgroundAlpha: number;

    // default layers for various types of controls
    defaultLayer: IColorLayerKey;
    themedLayer: IColorLayerKey;
    shadedLayer: IColorLayerKey;
    relativeShading: boolean;

    // color transforms for filling in the base colors for layers
    neutralGenerator: (props: ILayerGeneratorProps) => IColorLayer;
    themeGenerator: (props: ILayerGeneratorProps) => IColorLayer;
    customGenerators?: Map<string, (props: ILayerGeneratorProps) => IColorLayer>;

    // layer transforms for mapping different kind of state effects.
    hoveredTransform: (props: ILayerTransformProps) => IColorLayer;
    pressedTransform: (props: ILayerTransformProps) => IColorLayer;
    selectedTransform: (props: ILayerTransformProps) => IColorLayer;
    disabledTransform: (props: ILayerTransformProps) => IColorLayer;

    // one off color routines
    customColors?: Map<string, (props: ICustomColorTransformProps) => ICustomColor>;
}
