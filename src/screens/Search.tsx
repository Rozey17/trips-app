import { View, Text, ScrollView } from "react-native";
import React from "react";
import { s } from "react-native-wind";
import { SafeAreaView } from "react-native-safe-area-context";
import { Entypo, FontAwesome5 } from "@expo/vector-icons";

const Search = () => {
  return (
    <SafeAreaView style={s`flex-1`}>
      <View style={s`p-5 bg-white flex-row justify-between items-center`}>
        <FontAwesome5 name="backspace" size={24} color="black" />
        <Text>Hello</Text>
        <Entypo name="menu" size={24} color="black" />
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Text>
          llllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllll
        </Text>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Search;
