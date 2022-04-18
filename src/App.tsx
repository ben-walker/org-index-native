import { ApolloProvider } from "@apollo/client";
import { NavigationContainer } from "@react-navigation/native";
import { ThemeProvider } from "@shopify/restyle";
import { registerRootComponent } from "expo";
import { StatusBar } from "expo-status-bar";
import { useMemo } from "react";
import { useColorScheme } from "react-native";

import { RootNavigator } from "./features/root-navigator";
import { client } from "./graphql";
import { getTheme } from "./theme";

const App = () => {
  const scheme = useColorScheme();

  const theme = useMemo(() => getTheme(scheme), [scheme]);

  return (
    <ApolloProvider client={client}>
      <ThemeProvider theme={theme}>
        <NavigationContainer theme={theme}>
          <StatusBar style="auto" />
          <RootNavigator />
        </NavigationContainer>
      </ThemeProvider>
    </ApolloProvider>
  );
};

registerRootComponent(App);
