import { Feather } from "@expo/vector-icons";
import {
  BottomTabNavigationOptions,
  createBottomTabNavigator,
} from "@react-navigation/bottom-tabs";
import { useCallback } from "react";

import { BrowseNavigator } from "../browse";
import { ContributionsNavigator } from "../contributions";
import { ProfileNavigator } from "../profile";
import { TAB_BAR_ICONS } from "./constants";
import { TabParamList } from "./types";

const Tab = createBottomTabNavigator<TabParamList>();

export const TabNavigator = () => {
  const getTabBarIcon = useCallback(
    (routeName: keyof TabParamList): BottomTabNavigationOptions["tabBarIcon"] =>
      function innerFn({ color, size }) {
        const iconName = TAB_BAR_ICONS[routeName];

        return <Feather color={color} name={iconName} size={size} />;
      },
    []
  );

  return (
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
};
