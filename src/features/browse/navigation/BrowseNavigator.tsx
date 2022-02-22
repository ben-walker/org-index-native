import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { FeedScreen } from "../FeedScreen";
import { BrowseStackParamList, BrowseStackScreens } from "./types";

const Stack = createNativeStackNavigator<BrowseStackParamList>();

export const BrowseNavigator = () => (
  <Stack.Navigator>
    <Stack.Screen name={BrowseStackScreens.Feed} component={FeedScreen} />
  </Stack.Navigator>
);
