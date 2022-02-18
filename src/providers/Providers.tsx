import { ApolloProvider } from "@apollo/client";
import { FC } from "react";

import { client } from "./apollo";

export const Providers: FC = ({ children }) => (
  <ApolloProvider client={client}>{children}</ApolloProvider>
);
