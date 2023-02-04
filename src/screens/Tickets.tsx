import { View, Text, StyleSheet } from "react-native";
import React from "react";
import { s } from "react-native-wind";
import { SafeAreaView } from "react-native-safe-area-context";
import Header from "../components/Header";

const Tickets = () => {
  return (
    <SafeAreaView style={s`flex-1 p-5 bg-white`}>
      <View style={s``}>
        <Text style={styles.title}>Tickets</Text>
      </View>
    </SafeAreaView>
  );
};

export default Tickets;

const styles = StyleSheet.create({
  title: {
    fontFamily: "josefinSans-bold",
    fontSize: 36,
    // fontWeight: "bold",
  },
  text: {
    fontFamily: "catamaran-regular",
    marginLeft: 10,
    fontSize: 16,
    // textTransform:'capitalize'
  },
  text2: {
    fontFamily: "catamaran-regular",
    fontSize: 16,
    color: "#9ca3af",
  },
});
