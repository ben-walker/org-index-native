import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { LogInScreen } from "./LogInScreen";
import { SignUpScreen } from "./SignUpScreen";
import { AuthStackParamList } from "./types";

const Stack = createNativeStackNavigator<AuthStackParamList>();

export const AuthNavigator = () => (
  <Stack.Navigator>
    <Stack.Screen
      name="LogIn"
      component={LogInScreen}
      options={{ title: "Log In" }}
    />
    <Stack.Screen
      name="SignUp"
      component={SignUpScreen}
      options={{ title: "Sign Up" }}
    />
  </Stack.Navigator>
);
