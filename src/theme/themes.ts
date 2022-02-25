import { createTheme } from "@shopify/restyle";

import { Theme, ThemeMap } from "./types";

const palette = {};

export const theme = createTheme({
  dark: false,
  breakpoints: {},
  colors: {},
  spacing: {},
});

export const darkTheme: Theme = {
  ...theme,
  dark: true,
  colors: {},
};

export const themeMap: ThemeMap = {
  light: theme,
  dark: darkTheme,
};
