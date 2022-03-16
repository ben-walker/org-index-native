import { useQuery } from "@apollo/client";
import { useCallback } from "react";
import { FlatList, ListRenderItem } from "react-native";

import { FeedDocument } from "../../generated/graphql";
import { LIST_END_REACHED_THRESHOLD, LIST_PAGE_SIZE } from "../common";
import { FeedItemOrganization } from "./FeedItemOrganization";
import { FeedOrganization } from "./types";

export const FeedScreen = () => {
  const { data, fetchMore, loading, refetch } = useQuery(FeedDocument, {
    variables: { take: LIST_PAGE_SIZE },
  });

  const keyExtractor = useCallback(({ id }: FeedOrganization) => id, []);

  const renderItem: ListRenderItem<FeedOrganization> = useCallback(
    ({ item }) => <FeedItemOrganization organization={item} />,
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

  // TODO: fix duplicate keys on fast scrolling
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
