import { ColorSchemeName } from "react-native";

import { theme } from "./themes";

export type ColorScheme = Exclude<ColorSchemeName, undefined | null>;

export type Theme = typeof theme;

export type ThemeMap = {
  [k in ColorScheme]: Theme;
};
