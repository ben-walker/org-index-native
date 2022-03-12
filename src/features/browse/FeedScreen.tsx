import { useQuery } from "@apollo/client";
import { useCallback } from "react";
import { FlatList, ListRenderItem } from "react-native";

import { FeedDocument, Organization } from "../../generated/graphql";
import { LIST_END_REACHED_THRESHOLD, LIST_PAGE_SIZE, Text } from "../common";

export const FeedScreen = () => {
  const { data, fetchMore, loading, refetch } = useQuery(FeedDocument, {
    variables: { take: LIST_PAGE_SIZE },
  });

  const keyExtractor = useCallback(({ id }: Organization) => id, []);

  const renderItem: ListRenderItem<Organization> = useCallback(
    ({ item: { name } }) => <Text variant="body">{name}</Text>,
    []
  );

  const handleRefresh = useCallback(() => void refetch(), [refetch]);

  const handleEndReached = useCallback(() => {
    const { id } = data?.organizations.slice(-1)[0] || {};

    if (!id) {
      return;
    }

    void fetchMore({ variables: { cursor: { id }, skip: 1 } });
  }, [data?.organizations, fetchMore]);

  return (
    <FlatList
      data={data?.organizations}
      keyExtractor={keyExtractor}
      onEndReached={handleEndReached}
      onEndReachedThreshold={LIST_END_REACHED_THRESHOLD}
      onRefresh={handleRefresh}
      refreshing={loading}
      renderItem={renderItem}
    />
  );
};
