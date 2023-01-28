import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  Image,
  TextInput,
} from "react-native";
import React, { useLayoutEffect } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { s } from "react-native-wind";
import { Ionicons, MaterialIcons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

const PersonalInfo = () => {
  const navigation = useNavigation();
  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);
  return (
    <SafeAreaView style={s`bg-white h-full `}>
      <View style={s`flex-row px-5 py-4 items-center justify-between`}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons name="arrow-back" size={24} color="black" />
        </TouchableOpacity>
        <Text style={styles.title}>edit personal info</Text>
        <Ionicons name="arrow-back" size={24} color="white" />
      </View>
      <ScrollView style={s`p-5`}>
        <View style={s`flex-row items-center my-5`}>
          <Image
            source={{
              uri: "https://cdn-icons-png.flaticon.com/512/3135/3135715.png",
            }}
            style={s`w-20 h-20 mr-6`}
          />
          <TouchableOpacity style={s`flex-row items-center`}>
            <MaterialIcons name="photo-camera" size={24} color="#2dd4bf" />
            <Text style={styles.text2}>Update photo</Text>
          </TouchableOpacity>
        </View>
        <TextInput
          style={s`border border-gray-300 px-4 py-2 mb-5`}
          placeholder="name"
        />
        <TextInput
          style={s`border border-gray-300 px-4 py-2 mb-5`}
          placeholder="name"
        />
        <TextInput
          style={s`border border-gray-300 px-4 py-2 mb-5`}
          placeholder="name"
        />
        <TextInput
          style={s`border border-gray-300 px-4 py-2 mb-5`}
          placeholder="name"
        />
        <TouchableOpacity style={s`px-4 py-2 bg-teal-500`}>
          <Text style={styles.button_text}>Save</Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
};

export default PersonalInfo;

const styles = StyleSheet.create({
  title: {
    fontFamily: "josefinSans-bold",
    fontSize: 20,

    // fontSize: 36,
    textTransform: "capitalize",
    // fontWeight: "bold",
  },
  text: {
    fontFamily: "catamaran-regular",
    marginLeft: 10,
    fontSize: 16,
    // textTransform:'capitalize'
  },
  text2: {
    fontFamily: "catamaran-medium",
    fontSize: 16,
    color: "#2dd4bf",
    marginLeft: 5,
  },
  button_text: {
    fontFamily: "catamaran-medium",
    fontSize: 16,
    color: "white",
    textAlign: "center",
  },
});
