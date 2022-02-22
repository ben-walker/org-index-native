import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { FeedScreen } from "./FeedScreen";

enum Screens {
  Feed = "Feed",
}

type ParamList = {
  [Screens.Feed]: undefined;
};

const Stack = createNativeStackNavigator<ParamList>();

export const BrowseNavigator = () => (
  <Stack.Navigator>
    <Stack.Screen name={Screens.Feed} component={FeedScreen} />
  </Stack.Navigator>
);
