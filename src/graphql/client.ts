import { ApolloClient, InMemoryCache } from "@apollo/client";

import { authLink, httpLink } from "./links";
import { typePolicies } from "./type-policies";

export const client = new ApolloClient({
  cache: new InMemoryCache({ typePolicies }),
  link: authLink.concat(httpLink),
});
