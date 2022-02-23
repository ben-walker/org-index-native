import Constants from "expo-constants";

import { ManifestExtra } from "./types";

export const { graphUri = "http://localhost:4000" } = <ManifestExtra>(
  Constants.manifest?.extra
);
