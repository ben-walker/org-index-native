import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { OverviewScreen } from "../OverviewScreen";
import { ProfileStackParamList } from "./types";

const Stack = createNativeStackNavigator<ProfileStackParamList>();

export const ProfileNavigator = () => (
  <Stack.Navigator>
    <Stack.Screen
      name="Overview"
      component={OverviewScreen}
      options={{ title: "Profile" }}
    />
  </Stack.Navigator>
);
