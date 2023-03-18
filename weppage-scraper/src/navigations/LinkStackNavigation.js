import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { LinkListScreen } from "../screens/LinkListScreen";
import { LinkDetailScreen } from "../screens/LinkDetailScreen";

const Stack = createNativeStackNavigator();

export default LinkStackNavigation = () => {
  return (
    <Stack.Navigator
      initialRouteName="LinkList"
      screenOptions={{ presentation: "card", headerShown: false }}
    >
      <Stack.Screen name="LinkList" component={LinkListScreen}></Stack.Screen>
      <Stack.Screen
        name="LinkDetail"
        component={LinkDetailScreen}
      ></Stack.Screen>
    </Stack.Navigator>
  );
};
