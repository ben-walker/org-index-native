import { useQuery } from "@apollo/client";
import { FlatList } from "react-native";

import { FeedDocument } from "../../generated/graphql";

export const FeedScreen = () => {
  const { loading } = useQuery(FeedDocument);

  return <FlatList refreshing={loading} />;
};
