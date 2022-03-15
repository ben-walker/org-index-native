import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { FeedScreen } from "../FeedScreen";
import { OrganizationScreen } from "../OrganizationScreen";
import { BrowseStackParamList, BrowseStackScreens } from "./types";

const Stack = createNativeStackNavigator<BrowseStackParamList>();

export const BrowseNavigator = () => (
  <Stack.Navigator>
    <Stack.Screen name={BrowseStackScreens.Feed} component={FeedScreen} />
    <Stack.Screen
      name={BrowseStackScreens.Organization}
      component={OrganizationScreen}
    />
  </Stack.Navigator>
);
