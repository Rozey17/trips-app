import { View, Text, ScrollView, Pressable, StyleSheet } from "react-native";
import React from "react";
import { s } from "react-native-wind";
import { useNavigation } from "@react-navigation/native";
import { Feather, Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";
import FindCityHeader from "../components/FindCityHeader";

const Localization = () => {
  const navigation = useNavigation();

  return (
    <View style={s`flex-1`}>
      <FindCityHeader />
      <ScrollView style={s`px-4`}>
        <Pressable
          style={s`flex-row items-center py-5 border-t  border-gray-200 `}
        >
          <MaterialCommunityIcons
            name="map-marker-outline"
            size={24}
            color="black"
          />
          <View style={s` `}>
            <Text style={styles.text}>Orleans</Text>
            <Text style={styles.text}>2.00 km</Text>
          </View>
        </Pressable>
        <Pressable
          style={s`flex-row items-center py-5 border-t border-b border-gray-200`}
        >
          <MaterialCommunityIcons
            name="map-marker-outline"
            size={24}
            color="black"
          />
          <View style={s` `}>
            <Text style={styles.text}>Blois</Text>
            <Text style={styles.text}>63.43 km</Text>
          </View>
        </Pressable>
      </ScrollView>
    </View>
  );
};

export default Localization;

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
});
