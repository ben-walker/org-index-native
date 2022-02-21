import { createNativeStackNavigator } from "@react-navigation/native-stack";

enum Screens {
  Overview = "Overview",
}

type ParamList = {
  [Screens.Overview]: undefined;
};

const Stack = createNativeStackNavigator<ParamList>();

export const ProfileNavigator = () => (
  <Stack.Navigator>
    <Stack.Screen name={Screens.Overview} component={() => null} />
  </Stack.Navigator>
);
