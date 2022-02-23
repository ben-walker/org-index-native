import { Feather } from "@expo/vector-icons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import { BrowseNavigator, ProfileNavigator } from "../features";
import { tabBarIcons } from "./constants";
import { RootTabParamList, RootTabScreens } from "./types";

const Tab = createBottomTabNavigator<RootTabParamList>();

export const RootNavigator = () => (
  <Tab.Navigator
    screenOptions={({ route }) => ({
      headerShown: false,
      tabBarIcon: ({ color, size }) => {
        const name = tabBarIcons[route.name];

        return <Feather name={name} color={color} size={size} />;
      },
    })}
  >
    <Tab.Screen name={RootTabScreens.Browse} component={BrowseNavigator} />
    <Tab.Screen name={RootTabScreens.Profile} component={ProfileNavigator} />
  </Tab.Navigator>
);
