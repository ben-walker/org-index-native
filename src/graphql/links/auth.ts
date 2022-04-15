import { setContext } from "@apollo/client/link/context";
import { getItemAsync } from "expo-secure-store";

import { STORE_KEY_ACCESS_TOKEN } from "../../features/auth/constants";
import { TOKEN_BEARER_PREFIX } from "./constants";

export const authLink = setContext(
  async (_, { headers }: { headers: Record<string, unknown> }) => {
    const accessToken = await getItemAsync(STORE_KEY_ACCESS_TOKEN);

    return {
      headers: {
        ...headers,
        authorization: accessToken
          ? `${TOKEN_BEARER_PREFIX}${accessToken}`
          : "",
      },
    };
  }
);
