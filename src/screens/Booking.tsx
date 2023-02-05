import { View, Text, StyleSheet, StatusBar } from "react-native";
import React from "react";
import { s } from "react-native-wind";
import { SafeAreaView } from "react-native-safe-area-context";

const Booking = () => {
  return (
    <SafeAreaView style={s`flex-1 p-5 bg-white`}>
      <StatusBar barStyle="dark-content" />

      <View style={s``}>
        <Text style={styles.title}>Booking</Text>
      </View>
    </SafeAreaView>
  );
};

export default Booking;

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
