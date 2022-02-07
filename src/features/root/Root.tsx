import { StatusBar } from "expo-status-bar";
import { Text, View } from "react-native";

import { Providers } from "../providers";

export const Root = () => (
  <Providers>
    <StatusBar style="auto" />
    {/* TODO: Replace with router */}
    <View>
      <Text>Open up App.tsx to start working on your app</Text>
    </View>
  </Providers>
);
