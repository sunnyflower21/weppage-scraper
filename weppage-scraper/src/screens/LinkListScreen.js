import { View } from "react-native";
import React, { useCallback } from "react";

import { Header } from "../components/header/Header";
import Button from "../components/Button";
import Typography from "../components/Typography";
import { useNavigation } from "@react-navigation/native";
import Spacer from "../components/Spacer";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import Icons from "../components/Icons";

export const LinkListScreen = () => {
  const navagation = useNavigation();
  const safeAreaInset = useSafeAreaInsets();

  const onPressButton = useCallback(() => {
    navagation.navigate("LinkDetail");
  }, []);
  const onPressAddButton = useCallback(() => {
    navagation.navigate("AddLink");
  }, []);
  return (
    <View style={{ flex: 1 }}>
      <Header>
        <Header.Group>
          <Header.Title title="LinkList"></Header.Title>
        </Header.Group>
      </Header>

      <View
        style={{
          flex: 1,
          justifyContent: "center",
          paddingHorizontal: 12,
        }}
      >
        <Button onPress={onPressButton}>
          <Typography fontSize={18}>링크 디테일로 이동하기</Typography>
        </Button>
        <Spacer Spacer={12}></Spacer>
        <Button onPress={onPressAddButton}>
          <Typography fontSize={18}>링크 등록하기로 이동하기</Typography>
        </Button>
      </View>
      <View
        style={{
          position: "absolute",
          right: 24,
          bottom: 24 + safeAreaInset.bottom,
        }}
      >
        <Button onPress={onPressAddButton}>
          <View
            style={{
              width: 52,
              height: 52,
              borderRadius: 26,
              alignItems: "center",
              justifyContent: "center",
              backgroundColor: "black",
            }}
          >
            <Icons name="add" color="white" size={32}></Icons>
          </View>
        </Button>
      </View>
    </View>
  );
};
