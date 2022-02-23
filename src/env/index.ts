import Constants from "expo-constants";

type ManifestExtra = {
  graphUri: string;
};

export const { graphUri = "http://localhost:4000" } = <ManifestExtra>(
  Constants.manifest?.extra
);
