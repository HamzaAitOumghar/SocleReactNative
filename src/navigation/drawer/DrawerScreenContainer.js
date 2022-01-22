import { StatusBar } from "react-native";
import React from "react";
import COLORS from "../../const/colors";
import { useDrawerProgress, useDrawerStatus } from "@react-navigation/drawer";
import Animated from "react-native-reanimated";

const DrawerScreenContainer = ({ children }) => {
  const progress = useDrawerProgress();
  const isDrawerOpen = useDrawerStatus();

  const scale = Animated.interpolateNode(progress, {
    inputRange: [0, 1],
    outputRange: [1, 0.8],
  });

  const borderRadius = Animated.interpolateNode(progress, {
    inputRange: [0, 1],
    outputRange: [0, 25],
  });

  return (
    <Animated.View
      style={{
        backgroundColor: COLORS.white,
        flex: 1,
        borderRadius,
        transform: [{ scale }],
        overflow: "hidden",
      }}
    >
      <StatusBar
        barStyle="dark-content"
        backgroundColor={isDrawerOpen == "open" ? COLORS.primary : COLORS.white}
      />
      {children}
    </Animated.View>
  );
};

export default DrawerScreenContainer;
