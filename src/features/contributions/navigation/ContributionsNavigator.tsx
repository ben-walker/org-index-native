import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { ArchiveScreen } from "../ArchiveScreen";
import {
  ContributionsStackParamList,
  ContributionsStackScreens,
} from "./types";

const Stack = createNativeStackNavigator<ContributionsStackParamList>();

export const ContributionsNavigator = () => (
  <Stack.Navigator>
    <Stack.Screen
      name={ContributionsStackScreens.Archive}
      component={ArchiveScreen}
    />
  </Stack.Navigator>
);
