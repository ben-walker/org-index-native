import { Feather } from "@expo/vector-icons";

export type RootTabParamList = {
  Browse: undefined;
  Contributions: undefined;
  Profile: undefined;
};

export type TabBarIcons = {
  [key in keyof RootTabParamList]: keyof typeof Feather.glyphMap;
};
