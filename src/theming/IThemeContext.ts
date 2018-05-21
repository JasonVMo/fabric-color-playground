import { IRequiredColors } from "./IRequiredColors";
import { IColorLayer } from "./IColorLayer";
import { IColorLayerKey, ColorLayerType } from "./IColorLayerKey";
import { IColorPalette } from "./IColorPalette";
import { IThemeDefinition } from "./IThemeDefinition";

export interface IThemeContext {
    themeStyle: string;
    definition: IThemeDefinition;
    defaultLayer: IColorLayerKey;
    palette: IColorPalette;
}

export function GetColorLayer(layerKey: IColorLayerKey, theme: IThemeContext, criteria?: IRequiredColors): IColorLayer {
    let result: IColorLayer|undefined = undefined;
    let palette = theme.palette;
    let depth = layerKey.depth;
    switch (layerKey.type) {
        case ColorLayerType.Neutral:
            if (!palette.neutralLayers[depth]) {
                palette.neutralLayers[depth] = theme.definition.neutralGenerator({targetKey: layerKey, theme: theme});
            }
            result = palette.neutralLayers[depth];
            break;
        case ColorLayerType.Theme:
            if (!palette.themeLayers[depth]) {
                palette.themeLayers[depth] = theme.definition.themeGenerator({targetKey: layerKey, theme: theme});
            }
            result = palette.themeLayers[depth];
            break;
        case ColorLayerType.Custom:
            if (layerKey.name) {
                let lookupResult = palette.customLayers.get(layerKey.name);
                if (lookupResult) {
                    result = lookupResult;
                } else if (theme.definition.customGenerators) {
                    let generator = theme.definition.customGenerators.get(layerKey.name);
                    if (generator) {
                        let newLayer = generator({targetKey: layerKey, theme: theme});
                        palette.customLayers.set(layerKey.name, newLayer);
                        result = newLayer;
                    }
                }
            }
            break;                
    }
    if (!result) {
        return GetColorLayer(theme.defaultLayer, theme, criteria);
    }
    if (criteria) {
        FillLayerCriteria(result, layerKey, theme, criteria);
    }
    return result;
}

export interface ILayerTransformProps {
    baseKey: IColorLayerKey;
    baseLayer: IColorLayer;
    theme: IThemeContext;
}

function FillLayerCriteria(
                layer: IColorLayer, 
                layerKey: IColorLayerKey, 
                theme: IThemeContext, 
                criteria: IRequiredColors, 
                recurse: boolean = false) {
    let definition: IThemeDefinition = theme.definition;
    if (recurse) {
        if (criteria.hovered && !layer.hovered) {
            layer.hovered = definition.hoveredTransform({baseKey: layerKey, baseLayer: layer, theme: theme});
            FillLayerCriteria(layer.hovered, layerKey, theme, criteria, false);
        }
        if (criteria.pressed && !layer.pressed) {
            layer.pressed = definition.pressedTransform({baseKey: layerKey, baseLayer: layer, theme: theme});
            FillLayerCriteria(layer.pressed, layerKey, theme, criteria, false);
        }
        if (criteria.disabled && !layer.disabled) {
            layer.disabled = definition.disabledTransform({baseKey: layerKey, baseLayer: layer, theme: theme});
            FillLayerCriteria(layer.disabled, layerKey, theme, criteria, false);
        }
    }
    if (criteria.custom) {
        
    }
}