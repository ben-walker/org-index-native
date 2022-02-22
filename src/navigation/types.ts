export enum RootTabScreens {
  Browse = "Browse",
  Profile = "Profile",
}

export type RootTabParamList = {
  [RootTabScreens.Browse]: undefined;
  [RootTabScreens.Profile]: undefined;
};
