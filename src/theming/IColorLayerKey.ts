export enum ColorLayerType {
    Neutral,
    Theme,
    Custom
}

export interface IColorLayerKey {
    type: ColorLayerType;
    depth: number;
    name?: string;
}
