import { Feather } from "@expo/vector-icons";

export type TabParamList = {
  Browse: undefined;
  Contributions: undefined;
  Profile: undefined;
};

export type TabBarIcons = {
  [key in keyof TabParamList]: keyof typeof Feather.glyphMap;
};
