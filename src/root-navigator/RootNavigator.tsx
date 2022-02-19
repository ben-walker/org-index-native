import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

enum Screens {
  Browse = "Browse",
  Profile = "Profile",
}

type ParamList = {
  [Screens.Browse]: undefined;
  [Screens.Profile]: undefined;
};

const Tab = createBottomTabNavigator<ParamList>();

export const RootNavigator = () => (
  <Tab.Navigator>
    <Tab.Screen name={Screens.Browse} component={() => null} />
    <Tab.Screen name={Screens.Profile} component={() => null} />
  </Tab.Navigator>
);
