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
const Stack = createNativeStackNavigator();

const RootNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName="Search"
      // screenOptions={{
      //   gestureEnabled: false,
      //   headerShown: false,
      // }}
    >
      {/* <Stack.Screen name="MainLayout" component={MainLayout} />
      <Stack.Screen name="Search" component={Search} />
      <Stack.Screen name="Wishlist" component={Wishlist} />
      <Stack.Screen name="Trips" component={Trips} />
      <Stack.Screen name="Inbox" component={Inbox} />
      <Stack.Screen name="ProfileScreen" component={ProfileStack} />
      <Stack.Screen name="Localization" component={Localization} />
      <Stack.Screen name="PersonalInfo" component={PersonalInfo} /> */}
      <Stack.Screen
        name="Root"
        component={BottomTabStack}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
};

const ProfileStackNavigator = createNativeStackNavigator();

const ProfileStack = () => {
  return (
    <ProfileStackNavigator.Navigator>
      <ProfileStackNavigator.Screen name="ProfileScreen" component={Profile} />
      <ProfileStackNavigator.Screen
        name="PersonalInfo"
        component={PersonalInfo}
      />
      <ProfileStackNavigator.Screen
        name="PaymentMethod"
        component={PaymentMethod}
      />
    </ProfileStackNavigator.Navigator>
  );
};

const BottomTabNavigator = createBottomTabNavigator();

const BottomTabStack = () => {
  return (
    <BottomTabNavigator.Navigator
      screenOptions={{
        tabBarStyle: {
          paddingVertical: 5,
          paddingHorizontal: 10,
        },
        headerShown: false,
      }}
    >
      <BottomTabNavigator.Screen
        name="Search"
        component={Search}
        options={{
          tabBarIcon: ({ color }) => (
            <FontAwesome5 name="search" size={20} color={color} />
          ),
          tabBarLabelStyle: {
            fontFamily: "catamaran-medium",
            textTransform: "uppercase",
            // fontSize: 12,
            // marginTop: 5,
          },
          headerShown: false,
        }}
      />
      <BottomTabNavigator.Screen
        name="Wishlist"
        component={Wishlist}
        options={{
          tabBarIcon: ({ color }) => (
            <FontAwesome5 name="heart" size={20} color={color} />
          ),
          tabBarLabelStyle: {
            fontFamily: "catamaran-medium",
            textTransform: "uppercase",
            // fontSize: 12,
            // marginTop: 5,
          },
          headerShown: false,
        }}
      />
      <BottomTabNavigator.Screen
        name="Trips"
        component={Trips}
        options={{
          tabBarIcon: ({ color }) => (
            <FontAwesome5 name="suitcase" size={20} color={color} />
          ),
          tabBarLabelStyle: {
            fontFamily: "catamaran-medium",
            textTransform: "uppercase",
            // fontSize: 12,
            // marginTop: 5,
          },
          headerShown: false,
        }}
      />
      <BottomTabNavigator.Screen
        name="Inbox"
        component={Inbox}
        options={{
          tabBarIcon: ({ color }) => (
            // <FontAwesome5 name="inbox" size={20} color={color} />
            <Feather name="message-circle" size={24} color={color} />
          ),
          tabBarLabelStyle: {
            fontFamily: "catamaran-medium",
            textTransform: "uppercase",
            // fontSize: 12,
            // marginTop: 5,
          },
          headerShown: false,
        }}
      />
      <BottomTabNavigator.Screen
        name="Profile"
        component={ProfileStack}
        options={{
          tabBarIcon: ({ color }) => (
            <FontAwesome5 name="user-circle" size={20} color={color} />
          ),
          tabBarLabelStyle: {
            fontFamily: "catamaran-medium",
            textTransform: "uppercase",
            // fontSize: 12,
            // marginTop: 5,
          },
          headerShown: false,
        }}
      />
    </BottomTabNavigator.Navigator>
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
