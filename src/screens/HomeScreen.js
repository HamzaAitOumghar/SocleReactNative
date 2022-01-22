import { Text, StyleSheet, Dimensions } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import COLORS from "../const/colors";
const { height } = Dimensions.get("window");

const HomeScreen = ({ navigation }) => {
  return (
    <SafeAreaView style={{ flex: 1, color: COLORS.white }}>
      <Text>Home</Text>
    </SafeAreaView>
  );
};

const style = StyleSheet.create({});

export default HomeScreen;
