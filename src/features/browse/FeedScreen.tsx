import { useQuery } from "@apollo/client";
import { FlatList } from "react-native";

import { FeedDocument } from "../../generated/graphql";
import { LIST_END_REACHED_THRESHOLD, Text } from "../common";

export const FeedScreen = () => {
  const { data, loading, refetch } = useQuery(FeedDocument);

  // TODO: use callbacks for FlatList props, add pagination
  return (
    <FlatList
      data={data?.organizations}
      keyExtractor={({ id }) => id}
      onEndReachedThreshold={LIST_END_REACHED_THRESHOLD}
      onRefresh={() =>
        void (async () => {
          await refetch();
        })
      }
      refreshing={loading}
      renderItem={({ item: { name } }) => <Text variant="body">{name}</Text>}
    />
  );
};
