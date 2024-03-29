import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { FeedScreen } from "./FeedScreen";
import { OrganizationScreen } from "./OrganizationScreen";
import { BrowseStackParamList } from "./types";

const Stack = createNativeStackNavigator<BrowseStackParamList>();

export const BrowseNavigator = () => (
  <Stack.Navigator>
    <Stack.Screen
      name="Feed"
      component={FeedScreen}
      options={{ title: "Browse" }}
    />
    <Stack.Screen
      name="Organization"
      component={OrganizationScreen}
      options={({ route }) => ({ title: route.params.name })}
    />
  </Stack.Navigator>
);
