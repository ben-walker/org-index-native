import { ApolloProvider } from "@apollo/client";
import { NavigationContainer } from "@react-navigation/native";
import { FC } from "react";

import { client } from "./apollo";

export const Providers: FC = ({ children }) => (
  <ApolloProvider client={client}>
    <NavigationContainer>{children}</NavigationContainer>
  </ApolloProvider>
);
