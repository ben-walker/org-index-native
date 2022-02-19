import { registerRootComponent } from "expo";
import { StatusBar } from "expo-status-bar";

import { Providers } from "./providers";
import { RootNavigator } from "./root-navigator";

const App = () => (
  <Providers>
    <StatusBar style="auto" />
    <RootNavigator />
  </Providers>
);

registerRootComponent(App);
