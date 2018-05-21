
export interface ICustomRequiredColor {
    name: string;
    type: string;
}

export interface IRequiredColors {
    strokes: boolean;
    hovered: boolean;
    pressed: boolean;
    disabled: boolean;
    custom?: Array<ICustomRequiredColor>;
}