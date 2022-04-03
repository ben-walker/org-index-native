import { setContext } from "@apollo/client/link/context";

export const authLink = setContext(
  (_, { headers }: { headers: Record<string, unknown> }) => {
    return {
      headers: {
        ...headers,
        authorization: "",
      },
    };
  }
);
