import { View, Text, Image } from "react-native";
import React from "react";
import {
  DrawerContentScrollView,
  DrawerItemList,
} from "@react-navigation/drawer";
import COLORS from "../../const/colors";

const CustomDrawerContent = (props) => {
  return (
    <DrawerContentScrollView style={{ paddingVertical: 30 }}>
      <View style={{ marginLeft: 20, marginVertical: 40 }}>
        <Image
          source={require("../../../assets/pic/person.jpg")}
          style={{
            height: 70,
            width: 70,
            borderRadius: 20,
          }}
        />
        <Text
          style={{
            color: COLORS.white,
            fontWeight: "bold",
            fontSize: 13,
            marginTop: 10,
          }}
        >
          Hamza Hamza
        </Text>
      </View>
      <DrawerItemList {...props} />
    </DrawerContentScrollView>
  );
};

export default CustomDrawerContent;
