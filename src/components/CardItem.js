import { View, Text, TouchableOpacity, StyleSheet, Image } from "react-native";
import React from "react";
import COLORS from "../const/colors";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const CardItem = ({ navigation, pet }) => {
  return (
    <TouchableOpacity
      activeOpacity={0.8}
      onPress={() => navigation.navigate("DetailsScreen", pet)}
    >
      <View style={style.cardContainer}>
        <View style={style.cardImageContainer}>
          <Image
            source={pet.image}
            style={{
              width: "100%",
              height: "100%",
              resizeMode: "contain",
            }}
          />
        </View>
        <View style={style.cardDetailsContainer}>
          <View
            style={{ flexDirection: "row", justifyContent: "space-between" }}
          >
            <Text
              style={{ fontWeight: "bold", color: COLORS.dark, fontSize: 20 }}
            >
              {pet?.name}
            </Text>
            <MaterialCommunityIcons
              name="gender-male"
              size={22}
              color={COLORS.grey}
            />
          </View>
          <Text style={{ fontSize: 12, marginTop: 5, color: COLORS.dark }}>
            {pet?.type}
          </Text>
          <Text style={{ fontSize: 10, marginTop: 5, color: COLORS.grey }}>
            {pet?.age}
          </Text>
          <View style={{ marginTop: 5, flexDirection: "row" }}>
            <MaterialCommunityIcons
              name="map-marker"
              size={18}
              color={COLORS.primary}
            />
            <Text style={{ fontSize: 12, marginLeft: 5, color: COLORS.grey }}>
              Disrance:7.8km
            </Text>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const style = StyleSheet.create({
  cardDetailsContainer: {
    height: 120,
    backgroundColor: COLORS.white,
    flex: 1,
    borderTopRightRadius: 10,
    borderBottomRightRadius: 10,
    padding: 20,
    justifyContent: "center",
  },
  cardContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 20,
  },
  cardImageContainer: {
    height: 150,
    width: 140,
    backgroundColor: COLORS.background,
    borderRadius: 20,
  },
});

export default CardItem;
