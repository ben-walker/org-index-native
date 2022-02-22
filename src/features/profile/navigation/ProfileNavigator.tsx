import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { OverviewScreen } from "../OverviewScreen";
import { ProfileStackParamList, ProfileStackScreens } from "./types";

const Stack = createNativeStackNavigator<ProfileStackParamList>();

export const ProfileNavigator = () => (
  <Stack.Navigator>
    <Stack.Screen
      name={ProfileStackScreens.Overview}
      component={OverviewScreen}
    />
  </Stack.Navigator>
);
