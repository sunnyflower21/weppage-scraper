import { View, Animated } from "react-native";
import React, { useCallback, useEffect, useState } from "react";
import Typography from "./Typography";

export const LottoNumberView = (props) => {
  const [layoutHeight, setLayoutHeight] = useState(0);
  const [animatedValue] = useState(new Animated.Value(1));

  const getNumberBackgroundColor = useCallback(() => {
    const randomNumber = Math.floor(Math.random() * 10) % 6;
    if (randomNumber === 0) {
      return "red";
    }
    if (randomNumber === 1) {
      return "gray";
    }
    if (randomNumber === 2) {
      return "green";
    }
    if (randomNumber === 3) {
      return "pink";
    }
    if (randomNumber === 4) {
      return "purple";
    }
    return "black";
  });

  const translateY = animatedValue.interpolate({
    inputRange: [0, 1],
    outputRange: [-layoutHeight * 0.6, 0],
  });

  useEffect(() => {
    animatedValue.setValue(0);
    Animated.timing(animatedValue, {
      duration: 1000,
      toValue: 1,
      useNativeDriver: true,
    }).start();
  }, [props.numbers]);

  return (
    <View
      onLayout={({ nativeEvent }) => {
        console.log("nativeEvent", nativeEvent.layout.height);
        setLayoutHeight(nativeEvent.layout.height);
      }}
      style={{
        flex: 1,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        overflow: "hidden",
      }}
    >
      {props.numbers.map((item, index) => {
        return (
          <Animated.View
            key={`number-${index}`}
            style={{
              backgroundColor: getNumberBackgroundColor(),
              width: 40,
              height: 40,
              borderRadius: 20,
              alignItems: "center",
              justifyContent: "center",
              transform: [
                {
                  translateY: translateY,
                },
              ],
            }}
          >
            <Typography fontSize={20} color="white">
              {item}
            </Typography>
          </Animated.View>
        );
      })}
    </View>
  );
};
