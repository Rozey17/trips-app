import { View, Text, TouchableOpacity, TextInput } from "react-native";
import React from "react";
import { LinearGradient } from "expo-linear-gradient";
import { s } from "react-native-wind";
import { useNavigation } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";
import { SafeAreaView } from "react-native-safe-area-context";
// import { TextInput } from "react-native-paper";

const FindCityHeader = () => {
  const navigation = useNavigation();

  return (
    <LinearGradient
      // Background Linear Gradient
      colors={["#4c669f", "#3b5998", "#192f6a"]}
      style={s`h-28`}
    >
      {/* <View style={s`h-28 bg-rose-500 `}> */}
      <SafeAreaView style={s`p-4`}>
        <View style={s`flex-row items-center `}>
          <TouchableOpacity onPress={() => navigation.goBack()} style={s`mr-5`}>
            <Ionicons name="arrow-back" size={24} color="white" />
          </TouchableOpacity>
          <TextInput
            // mode="flat"
            style={s`flex-1 border px-4 py-2 bg-white rounded border-gray-200`}
            // label="De"
            placeholder="trouver une ville"
          />
        </View>
      </SafeAreaView>
      {/* </View> */}
    </LinearGradient>
  );
};

export default FindCityHeader;
