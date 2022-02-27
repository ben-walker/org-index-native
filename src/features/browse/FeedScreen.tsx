import { useTypedQuery } from "../../zeus/apollo";
import { feedQuery } from "./queries";

export const FeedScreen = () => {
  useTypedQuery(feedQuery);

  return null;
};
