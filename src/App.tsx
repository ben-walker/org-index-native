import { ApolloProvider } from "@apollo/client";
import { NavigationContainer } from "@react-navigation/native";
import { ThemeProvider } from "@shopify/restyle";
import { registerRootComponent } from "expo";
import { StatusBar } from "expo-status-bar";
import { useMemo } from "react";
import { useColorScheme } from "react-native";

import { client } from "./graphql";
import { RootNavigator } from "./navigation";
import { DEFAULT_SCHEME, themeMap } from "./theme";

const App = () => {
  const scheme = useColorScheme();

  const theme = useMemo(() => themeMap[scheme || DEFAULT_SCHEME], [scheme]);

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
