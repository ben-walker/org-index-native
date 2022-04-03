import { createHttpLink } from "@apollo/client";

import { GRAPH_URI } from "../../env";

export const httpLink = createHttpLink({
  uri: GRAPH_URI,
});
