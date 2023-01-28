import { View, Text } from "react-native";
import React from "react";
import { s } from "react-native-wind";
import { SafeAreaView } from "react-native-safe-area-context";
import Header from "../components/Header";

const Wishlist = () => {
  return (
    <SafeAreaView style={s`flex-1 p-5`}>
      <View style={s``}>
        <Text>Wishlist</Text>
      </View>
    </SafeAreaView>
  );
};

export default Wishlist;
