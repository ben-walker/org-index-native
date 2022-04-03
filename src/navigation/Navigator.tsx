import { AuthNavigator } from "../features/auth";
import { TabNavigator } from "./TabNavigator";

export const Navigator = () => {
  const isAuthenticated = false; // TODO: Read this from context or apollo cache or something

  return isAuthenticated ? <TabNavigator /> : <AuthNavigator />;
};
