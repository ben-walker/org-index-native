import { Feather } from "@expo/vector-icons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import {
  BrowseNavigator,
  ContributionsNavigator,
  ProfileNavigator,
} from "../features";
import { TAB_BAR_ICONS } from "./constants";
import { RootTabParamList } from "./types";

const Tab = createBottomTabNavigator<RootTabParamList>();

export const RootNavigator = () => (
  <Tab.Navigator
    screenOptions={({ route }) => ({
      headerShown: false,
      tabBarIcon: ({ color, size }) => {
        const name = TAB_BAR_ICONS[route.name];

        return <Feather name={name} color={color} size={size} />;
      },
    })}
  >
    <Tab.Screen name="Browse" component={BrowseNavigator} />
    <Tab.Screen name="Contributions" component={ContributionsNavigator} />
    <Tab.Screen name="Profile" component={ProfileNavigator} />
  </Tab.Navigator>
);
