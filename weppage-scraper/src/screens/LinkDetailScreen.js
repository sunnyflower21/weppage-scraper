import { useNavigation } from "@react-navigation/native";
import React, { useCallback } from "react";
import { View } from "react-native";

import { Header } from "../components/header/Header";
import Spacer from "../components/Spacer";

export const LinkDetailScreen = () => {
  const navigation = useNavigation();
  const onPressBack = useCallback(() => {
    navigation.goBack();
  }, []);
  return (
    <View style={{ flex: 1 }}>
      <Header>
        <Header.Group>
          <Header.Icon
            iconName="arrow-back"
            onPress={onPressBack}
          ></Header.Icon>
          <Spacer space={12}></Spacer>
          <Header.Title title="LinkDetailScreen"></Header.Title>
        </Header.Group>
      </Header>
    </View>
  );
};
