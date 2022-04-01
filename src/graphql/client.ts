import { ApolloClient, createHttpLink, InMemoryCache } from "@apollo/client";
import { setContext } from "@apollo/client/link/context";

import { GRAPH_URI } from "../env";
import { typePolicies } from "./type-policies";

const authLink = setContext(
  (_, { headers }: { headers: Record<string, unknown> }) => {
    return {
      headers: {
        ...headers,
        authorization: "",
      },
    };
  }
);

const httpLink = createHttpLink({
  uri: GRAPH_URI,
});

export const client = new ApolloClient({
  cache: new InMemoryCache({ typePolicies }),
  link: authLink.concat(httpLink),
});
