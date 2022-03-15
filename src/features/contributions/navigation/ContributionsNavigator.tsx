import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { ArchiveScreen } from "../ArchiveScreen";
import { ContributionsStackParamList } from "./types";

const Stack = createNativeStackNavigator<ContributionsStackParamList>();

export const ContributionsNavigator = () => (
  <Stack.Navigator>
    <Stack.Screen name="Archive" component={ArchiveScreen} />
  </Stack.Navigator>
);
