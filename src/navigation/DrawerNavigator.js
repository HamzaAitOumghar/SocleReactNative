import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
} from "@react-navigation/drawer";
import React from "react";
import { Image, Text, View } from "react-native";
import COLORS from "../const/colors";
import HomeScreen from "../screens/HomeScreen";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import CustomDrawerContent from "./drawer/CustomDrawerContent";
import DrawerScreenContainer from "./drawer/DrawerScreenContainer";

const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
  return (
    <Drawer.Navigator
      screenOptions={{
        headerShown: false,
        drawerType: "slide",
        drawerStyle: {
          width: 200,
          backgroundColor: COLORS.primary,
        },
        overlayColor: null,
        sceneContainerStyle: {
          backgroundColor: COLORS.primary,
        },
        drawerActiveTintColor: COLORS.white,
        drawerInactiveTintColor: COLORS.secondary,
        drawerItemStyle: {
          backgroundColor: null,
        },
        drawerLabelStyle: {
          fontWeight: "bold",
        },
      }}
      drawerContent={(props) => <CustomDrawerContent {...props} />}
    >
      <Drawer.Screen
        name="Home"
        options={{
          title: "ADOPTION",
          drawerIcon: ({ color }) => (
            <MaterialCommunityIcons
              name="paw"
              size={25}
              color={color}
              style={{ marginRight: -20 }}
            />
          ),
        }}
      >
        {({ props }) => (
          <DrawerScreenContainer>
            <HomeScreen {...props} />
          </DrawerScreenContainer>
        )}
      </Drawer.Screen>
      <Drawer.Screen
        name="Donation"
        options={{
          title: "DONATION",
          drawerIcon: ({ color }) => (
            <MaterialCommunityIcons
              name="gift"
              size={25}
              color={color}
              style={{ marginRight: -20 }}
            />
          ),
        }}
      >
        {({ props }) => (
          <DrawerScreenContainer>
            <HomeScreen {...props} />
          </DrawerScreenContainer>
        )}
      </Drawer.Screen>

      <Drawer.Screen
        name="AddPet"
        options={{
          title: "Add Pet",
          drawerIcon: ({ color }) => (
            <MaterialCommunityIcons
              name="plus-box"
              size={25}
              color={color}
              style={{ marginRight: -20 }}
            />
          ),
        }}
      >
        {({ props }) => (
          <DrawerScreenContainer>
            <HomeScreen {...props} />
          </DrawerScreenContainer>
        )}
      </Drawer.Screen>
      <Drawer.Screen
        name="Favourites"
        options={{
          title: "Favourites",
          drawerIcon: ({ color }) => (
            <MaterialCommunityIcons
              name="heart"
              size={25}
              color={color}
              style={{ marginRight: -20 }}
            />
          ),
        }}
      >
        {({ props }) => (
          <DrawerScreenContainer>
            <HomeScreen {...props} />
          </DrawerScreenContainer>
        )}
      </Drawer.Screen>

      <Drawer.Screen
        name="Profile"
        options={{
          title: "Profile",
          drawerIcon: ({ color }) => (
            <MaterialCommunityIcons
              name="account"
              size={25}
              color={color}
              style={{ marginRight: -20 }}
            />
          ),
        }}
      >
        {({ props }) => (
          <DrawerScreenContainer>
            <HomeScreen {...props} />
          </DrawerScreenContainer>
        )}
      </Drawer.Screen>
    </Drawer.Navigator>
  );
};

export default DrawerNavigator;
