import { ApolloClient, InMemoryCache } from "@apollo/client";

import { GRAPH_URI } from "../env";

export const client = new ApolloClient({
  cache: new InMemoryCache(),
  uri: GRAPH_URI,
});
