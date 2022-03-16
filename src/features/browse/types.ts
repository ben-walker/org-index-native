import { NativeStackNavigationProp } from "@react-navigation/native-stack";

import { FeedQuery } from "../../generated/graphql";

export type BrowseStackParamList = {
  Feed: undefined;
  Organization: {
    name: string;
  };
};

export type BrowseStackNavigation<T extends keyof BrowseStackParamList> =
  NativeStackNavigationProp<BrowseStackParamList, T>;

export type FeedOrganization = FeedQuery["organizations"][0];
