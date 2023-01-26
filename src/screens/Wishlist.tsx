import { View, Text } from "react-native";
import React from "react";
import { s } from "react-native-wind";
import { SafeAreaView } from "react-native-safe-area-context";
import Header from "../components/Header";

const Wishlist = () => {
  return (
    <View style={s`flex-1`}>
      <Header />

      <View style={s``}>
        <Text>Wishlist</Text>
      </View>
    </View>
  );
};

export default Wishlist;
