import React from "react";
import { View, Text as RNText } from "react-native";

export default function Typography(props) {
  return (
    <RNText style={{ color: props.color, fontSize: props.fontSize }}>
      {props.children}
    </RNText>
  );
}
