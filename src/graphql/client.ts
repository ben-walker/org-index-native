import { ApolloClient, InMemoryCache } from "@apollo/client";

import { graphUri } from "../env";

export const client = new ApolloClient({
  cache: new InMemoryCache(),
  uri: graphUri,
});
