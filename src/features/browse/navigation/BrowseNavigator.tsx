import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { FeedScreen } from "../FeedScreen";
import { OrganizationScreen } from "../OrganizationScreen";
import { BrowseStackParamList } from "./types";

const Stack = createNativeStackNavigator<BrowseStackParamList>();

export const BrowseNavigator = () => (
  <Stack.Navigator>
    <Stack.Screen name="Feed" component={FeedScreen} />
    <Stack.Screen name="Organization" component={OrganizationScreen} />
  </Stack.Navigator>
);
