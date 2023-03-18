import React, { useCallback, useState } from "react";
import { View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

import { Header } from "../components/header/Header";
import { SingleLineInput } from "../components/SingleLineInput";
import Button from "../components/Button";
import Typography from "../components/Typography";

export const AddLinkScreen = () => {
  const navigation = useNavigation();
  const safeAreaInset = useSafeAreaInsets();

  const [url, setUrl] = useState("");
  const onPressClose = useCallback(() => {
    navigation.goBack();
  }, []);
  return (
    <View style={{ flex: 1 }}>
      <Header>
        <Header.Group>
          <Header.Title title="AddLinkScreen"></Header.Title>
        </Header.Group>
        <Header.Icon iconName="close" onPress={onPressClose}></Header.Icon>
      </Header>
      <View
        style={{
          flex: 1,
          alignItems: "center",
          justifyContent: "center",
          padding: 24,
        }}
      >
        <SingleLineInput
          value={url}
          placeHolder="http://example.com"
          onChangeText={setUrl}
        ></SingleLineInput>
      </View>
      <Button>
        <View
          style={{
            backgroundColor: url === "" ? "gray" : "black",
            paddingBottom: safeAreaInset.bottom,
          }}
        >
          <View
            style={{
              height: 52,
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Typography color="white" fontSize={18}>
              저장하기
            </Typography>
          </View>
        </View>
      </Button>
    </View>
  );
};
