import { View, Text } from "react-native";
import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Search from "../../screens/Search";
import Localization from "../../screens/Localization";

const SearchStackNavigator = createNativeStackNavigator();

const SearchStack = () => {
  return (
    <SearchStackNavigator.Navigator>
      <SearchStackNavigator.Screen name="SearchScreen" component={Search} />
      <SearchStackNavigator.Screen
        name="Localization"
        component={Localization}
      />
    </SearchStackNavigator.Navigator>
  );
};

export default SearchStack;
