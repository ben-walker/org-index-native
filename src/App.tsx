import { ApolloProvider } from "@apollo/client";
import { NavigationContainer } from "@react-navigation/native";
import { registerRootComponent } from "expo";
import { StatusBar } from "expo-status-bar";

import { client } from "./graphql";
import { Navigator } from "./navigator";

const App = () => (
  <ApolloProvider client={client}>
    <NavigationContainer>
      <StatusBar style="auto" />
      <Navigator />
    </NavigationContainer>
  </ApolloProvider>
);

registerRootComponent(App);
