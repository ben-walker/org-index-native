import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { OverviewScreen } from "./OverviewScreen";

enum Screens {
  Overview = "Overview",
}

type ParamList = {
  [Screens.Overview]: undefined;
};

const Stack = createNativeStackNavigator<ParamList>();

export const ProfileNavigator = () => (
  <Stack.Navigator>
    <Stack.Screen name={Screens.Overview} component={OverviewScreen} />
  </Stack.Navigator>
);
