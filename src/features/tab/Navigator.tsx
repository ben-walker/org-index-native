import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import { BrowseNavigator } from "../browse";
import { ContributionsNavigator } from "../contributions";
import { ProfileNavigator } from "../profile";
import { TabParamList } from "./types";
import { getTabBarIcon } from "./utils";

const Tab = createBottomTabNavigator<TabParamList>();

export const TabNavigator = () => (
  <Tab.Navigator
    screenOptions={({ route }) => ({
      headerShown: false,
      tabBarIcon: getTabBarIcon(route.name),
    })}
  >
    <Tab.Screen name="Browse" component={BrowseNavigator} />
    <Tab.Screen name="Contributions" component={ContributionsNavigator} />
    <Tab.Screen name="Profile" component={ProfileNavigator} />
  </Tab.Navigator>
);
