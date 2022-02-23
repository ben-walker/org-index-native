import { Feather } from "@expo/vector-icons";

export enum RootTabScreens {
  Browse = "Browse",
  Profile = "Profile",
}

export type RootTabParamList = {
  [RootTabScreens.Browse]: undefined;
  [RootTabScreens.Profile]: undefined;
};

export type TabBarIcons = {
  [key in RootTabScreens]: keyof typeof Feather.glyphMap;
};
