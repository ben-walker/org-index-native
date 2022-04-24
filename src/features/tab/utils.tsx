import { Feather } from "@expo/vector-icons";
import { BottomTabNavigationOptions } from "@react-navigation/bottom-tabs";

import { TAB_BAR_ICONS } from "./constants";
import { TabParamList } from "./types";

export const getTabBarIcon = (
  routeName: keyof TabParamList
): BottomTabNavigationOptions["tabBarIcon"] =>
  function innerFn({ color, size }) {
    const iconName = TAB_BAR_ICONS[routeName];

    return <Feather color={color} name={iconName} size={size} />;
  };
