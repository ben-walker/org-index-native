import { AuthNavigator } from "../auth";
import { TabNavigator } from "../tab";

export const RootNavigator = () => {
  const isAuthenticated = false; // TODO: Read this from context or apollo cache or something

  return isAuthenticated ? <TabNavigator /> : <AuthNavigator />;
};
