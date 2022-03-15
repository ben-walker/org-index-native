import { NativeStackNavigationProp } from "@react-navigation/native-stack";

export type BrowseStackParamList = {
  Feed: undefined;
  Organization: undefined;
};

export type BrowseStackNavigation<T extends keyof BrowseStackParamList> =
  NativeStackNavigationProp<BrowseStackParamList, T>;
