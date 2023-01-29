import { View, Text } from "react-native";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Search from "../screens/Search";
import MainLayout from "../screens/Tabs/MainLayout";
import Wishlist from "../screens/Wishlist";
import Trips from "../screens/Trips";
import Inbox from "../screens/Inbox";
import Profile from "../screens/Profile";
import Localization from "../screens/Localization";
import PersonalInfo from "../screens/PersonalInfo";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Feather, FontAwesome5 } from "@expo/vector-icons";
import PaymentMethod from "../screens/PaymentMethod";
import TabNavigation from "./TabNavigation/TabNavigation";

const Stack = createNativeStackNavigator();

const RootNavigator = () => {
  return (
    <Stack.Navigator initialRouteName="SearchScreen">
      <Stack.Screen
        name="Root"
        component={TabNavigation}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
};

const Navigation = () => {
  return (
    <NavigationContainer>
      <RootNavigator />
    </NavigationContainer>
  );
};

export default Navigation;
