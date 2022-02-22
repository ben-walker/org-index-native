import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import { BrowseNavigator, ProfileNavigator } from "../features";
import { RootTabParamList, RootTabScreens } from "./types";

const Tab = createBottomTabNavigator<RootTabParamList>();

export const RootNavigator = () => (
  <Tab.Navigator screenOptions={() => ({ headerShown: false })}>
    <Tab.Screen name={RootTabScreens.Browse} component={BrowseNavigator} />
    <Tab.Screen name={RootTabScreens.Profile} component={ProfileNavigator} />
  </Tab.Navigator>
);
