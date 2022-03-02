import { ApolloClient, InMemoryCache } from "@apollo/client";

import { GRAPH_URI } from "../env";
import { typePolicies } from "./type-policies";

export const client = new ApolloClient({
  cache: new InMemoryCache({ typePolicies }),
  uri: GRAPH_URI,
});
