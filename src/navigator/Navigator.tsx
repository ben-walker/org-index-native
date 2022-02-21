import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import { BrowseNavigator, ProfileNavigator } from "../features";

enum Screens {
  Browse = "Browse",
  Profile = "Profile",
}

type ParamList = {
  [Screens.Browse]: undefined;
  [Screens.Profile]: undefined;
};

const Tab = createBottomTabNavigator<ParamList>();

export const Navigator = () => (
  <Tab.Navigator screenOptions={() => ({ headerShown: false })}>
    <Tab.Screen name={Screens.Browse} component={BrowseNavigator} />
    <Tab.Screen name={Screens.Profile} component={ProfileNavigator} />
  </Tab.Navigator>
);
