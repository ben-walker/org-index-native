export enum BrowseStackScreens {
  Feed = "Feed",
  Organization = "Organization",
}

export type BrowseStackParamList = {
  [BrowseStackScreens.Feed]: undefined;
  [BrowseStackScreens.Organization]: undefined;
};
