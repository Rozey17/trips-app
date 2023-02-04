import { View, Text } from "react-native";
import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Search from "../../screens/Search";
import Localization from "../../screens/Localization";
import SearchResults from "../../screens/SearchResults";

const SearchStackNavigator = createNativeStackNavigator();

const SearchStack = () => {
  return (
    <SearchStackNavigator.Navigator>
      <SearchStackNavigator.Screen name="SearchScreen" component={Search} />
      <SearchStackNavigator.Screen
        name="Localization"
        component={Localization}
      />
      <SearchStackNavigator.Screen
        name="SearchResults"
        component={SearchResults}
      />
    </SearchStackNavigator.Navigator>
  );
};

export default SearchStack;
