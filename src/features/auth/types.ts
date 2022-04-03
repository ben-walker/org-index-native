import { NativeStackNavigationProp } from "@react-navigation/native-stack";

export type AuthStackParamList = {
  LogIn: undefined;
  SignUp: undefined;
};

export type AuthStackNavigation<T extends keyof AuthStackParamList> =
  NativeStackNavigationProp<AuthStackParamList, T>;
