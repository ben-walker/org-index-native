import Constants from "expo-constants";

import { ManifestExtra } from "./types";

export const { GRAPH_URI = "http://localhost:4000/graphql" } = <ManifestExtra>(
  Constants.manifest?.extra
);
