import { useNavigation } from "@react-navigation/native";
import { useCallback } from "react";
import { TouchableOpacity } from "react-native";

import { Text } from "../common";
import { BrowseStackNavigation } from "./types";
import { FeedOrganization } from "./types";

type Props = {
  organization: FeedOrganization;
};

export const FeedItemOrganization = ({ organization: { id, name } }: Props) => {
  const navigation = useNavigation<BrowseStackNavigation<"Feed">>();

  const pressHandler = useCallback(
    () => navigation.navigate("Organization", { name }),
    [navigation, name]
  );

  return (
    <TouchableOpacity onPress={pressHandler}>
      <Text variant="body">
        {id} {name}
      </Text>
    </TouchableOpacity>
  );
};
