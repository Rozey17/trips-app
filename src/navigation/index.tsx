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

const Stack = createNativeStackNavigator();

const RootNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName="MainLayout"
      screenOptions={{
        gestureEnabled: false,
        headerShown: false,
      }}
    >
      <Stack.Screen name="MainLayout" component={MainLayout} />
      <Stack.Screen name="Search" component={Search} />
      <Stack.Screen name="Wishlist" component={Wishlist} />
      <Stack.Screen name="Trips" component={Trips} />
      <Stack.Screen name="Inbox" component={Inbox} />
      <Stack.Screen name="Profile" component={Profile} />
      <Stack.Screen name="Localization" component={Localization} />
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
