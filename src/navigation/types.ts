import { Feather } from "@expo/vector-icons";

export enum RootTabScreens {
  Browse = "Browse",
  Contributions = "Contributions",
  Profile = "Profile",
}

export type RootTabParamList = {
  [RootTabScreens.Browse]: undefined;
  [RootTabScreens.Contributions]: undefined;
  [RootTabScreens.Profile]: undefined;
};

export type TabBarIcons = {
  [key in RootTabScreens]: keyof typeof Feather.glyphMap;
};
