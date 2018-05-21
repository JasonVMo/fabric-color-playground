/*
    Color set is the basic foreground background pair of guaranteed contrasting colors
*/
export interface IColorBase {
    foreground: string;     // text color, obviously
    background: string;     // background color, obviously
}

/*
    A pair of colors used for borders and lines in a controls
*/
export interface IColorPair {
    primary: string;        // primary border or line color
    secondary: string;      // alternate lighter line color for two color borders
}

/*
    Custom color values, calculated on demand
*/
export interface ICustomColor {
    type: string;
    color: string;
}

