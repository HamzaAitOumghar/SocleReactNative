import {
  Text,
  SafeAreaView,
  View,
  StyleSheet,
  Dimensions,
  Image,
  ScrollView,
  TextInput,
  TouchableOpacity,
} from "react-native";
import React, { useEffect, useState } from "react";
import COLORS from "../const/colors";
const { height } = Dimensions.get("window");
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { petCategories } from "../const/categories";
import { FlatList } from "react-native-gesture-handler";
import pets from "../const/pets";
import CardItem from "../components/CardItem";

const HomeScreen = ({ navigation }) => {
  const [selectedCategoryIndex, setSelectedCategoryIndex] = useState(0);

  const [filtredPets, setFiltredPets] = useState([]);

  const filterPet = (index) => {
    const currentPets = pets.filter(
      (item) => item?.pet?.toUpperCase() === petCategories[index].name
    )[0].pets;

    console.log(currentPets);

    setFiltredPets(currentPets);
  };

  useEffect(() => {
    filterPet(0);
  }, []);

  return (
    <SafeAreaView style={{ flex: 1, color: COLORS.white }}>
      <View style={style.header}>
        <MaterialCommunityIcons
          name="sort-variant"
          size={28}
          onPress={navigation.toggleDrawer}
        />
        <Text
          style={{ color: COLORS.primary, fontWeight: "bold", fontSize: 16 }}
        >
          Hamza Hamza
        </Text>
        <Image
          source={require("../../assets/pic/person.jpg")}
          style={{ height: 30, width: 30, borderRadius: 15 }}
        />
      </View>

      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={style.mainContainer}>
          <View style={style.searchInputContainer}>
            <MaterialCommunityIcons
              name="magnify"
              size={24}
              color={COLORS.grey}
            />
            <TextInput
              placeholder="Search pet to adopt"
              style={{ flex: 1 }}
              placeholderTextColor={COLORS.grey}
            />
            <MaterialCommunityIcons
              name="sort-ascending"
              size={24}
              color={COLORS.grey}
            />
          </View>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              marginTop: 20,
            }}
          >
            {petCategories.map((item, index) => (
              <View key={"pet" + index} style={{ alignItems: "center" }}>
                <TouchableOpacity
                  onPress={() => {
                    setSelectedCategoryIndex(index);
                  }}
                  style={[
                    style.categoryBtn,
                    {
                      backgroundColor:
                        selectedCategoryIndex === index
                          ? COLORS.primary
                          : COLORS.white,
                    },
                  ]}
                >
                  <MaterialCommunityIcons
                    name={item.icon}
                    size={30}
                    color={
                      selectedCategoryIndex === index
                        ? COLORS.white
                        : COLORS.primary
                    }
                  />
                </TouchableOpacity>
                <Text style={style.categoryBtnName}>{item.name}</Text>
              </View>
            ))}
          </View>
          <View style={{ marginTop: 20 }}>
            <FlatList
              showsVerticalScrollIndicator={false}
              data={filtredPets}
              renderItem={({ item }) => (
                <CardItem pet={item} navigation={navigation} />
              )}
            />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const style = StyleSheet.create({
  header: {
    padding: 20,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  mainContainer: {
    minHeight: height,
    backgroundColor: COLORS.light,
    marginTop: 20,
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
    paddingHorizontal: 20,
    paddingVertical: 40,
  },
  searchInputContainer: {
    height: 50,
    backgroundColor: COLORS.white,
    paddingHorizontal: 20,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  categoryBtn: {
    height: 50,
    width: 50,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 10,
    backgroundColor: COLORS.primary,
  },
  categoryBtnName: {
    color: COLORS.dark,
    fontSize: 10,
    marginTop: 5,
    fontWeight: "bold",
  },
});

export default HomeScreen;
