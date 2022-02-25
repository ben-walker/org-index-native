import { createTheme } from "@shopify/restyle";

import { Theme, ThemeMap } from "./types";

const palette = {
  pitchBlack: "#010101",
  black: "#121212",

  darkGray: "#1C1C1E",
  lightGray: "D8D8D8",
  gray: "272729",

  fireRed: "#FF3B30",
  lightRed: "#FF453A",

  oceanBlue: "#007AFF",
  royalBlue: "#0A84FF",

  white: "#FFFFFF",
  almostWhite: "#F2F2F2",
  offWhite: "#E5E5E7",
};

export const theme = createTheme({
  dark: false,
  breakpoints: {},
  colors: {
    primary: palette.oceanBlue,
    background: palette.almostWhite,
    card: palette.white,
    text: palette.darkGray,
    border: palette.lightGray,
    notification: palette.fireRed,
  },
  spacing: {},
});

export const darkTheme: Theme = {
  ...theme,
  dark: true,
  colors: {
    primary: palette.royalBlue,
    background: palette.pitchBlack,
    card: palette.black,
    text: palette.offWhite,
    border: palette.gray,
    notification: palette.lightRed,
  },
};

export const themeMap: ThemeMap = {
  light: theme,
  dark: darkTheme,
};
