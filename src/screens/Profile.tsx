import { View, Text, Image, StyleSheet, Pressable } from "react-native";
import React from "react";
import { s } from "react-native-wind";
import { SafeAreaView } from "react-native-safe-area-context";
import { Feather } from "@expo/vector-icons";

const Profile = () => {
  return (
    <SafeAreaView style={s`flex-1 p-4 bg-white`}>
      <View style={s`flex-row items-center my-5`}>
        <Image
          source={{
            uri: "https://cdn-icons-png.flaticon.com/512/3135/3135715.png",
          }}
          style={s`w-20 h-20 mr-6`}
        />
        <View>
          <Text numberOfLines={1} style={styles.title}>
            Bouiti Viodo
          </Text>
          <Text
            style={[
              { fontFamily: "catamaran-regular", fontSize: 16 },
              s`text-gray-400`,
            ]}
          >
            Lorem ipsum dolor sit, amet
          </Text>
        </View>
      </View>
      <Pressable
        style={s`flex-row items-center justify-between py-5 border-t  border-gray-200 `}
      >
        <View style={s`flex-row items-center `}>
          <Feather name="user" size={24} color="#9ca3af" />
          <Text style={styles.text}>Personal information</Text>
        </View>
        <Feather name="chevron-right" size={20} color="black" />
      </Pressable>
      <Pressable
        style={s`flex-row items-center justify-between py-5 border-t border-b border-gray-200`}
      >
        <View style={s`flex-row items-center `}>
          <Feather name="server" size={24} color="#9ca3af" />
          <Text style={styles.text}>Payment history</Text>
        </View>
        <Feather name="chevron-right" size={20} color="black" />
      </Pressable>
      <Pressable
        style={s`flex-row items-center justify-between py-5  border-b border-gray-200`}
      >
        <View style={s`flex-row items-center `}>
          <Feather name="credit-card" size={24} color="#9ca3af" />
          <Text style={styles.text}>Payment method</Text>
        </View>
        <Feather name="chevron-right" size={20} color="black" />
      </Pressable>
      <Pressable
        style={s`flex-row items-center justify-between py-5  border-b border-gray-200`}
      >
        <View style={s`flex-row items-center `}>
          <Feather name="tag" size={24} color="#9ca3af" />
          <Text style={styles.text}>Promocodes</Text>
        </View>
        <Feather name="chevron-right" size={20} color="black" />
      </Pressable>
      <Pressable
        style={s`flex-row items-center justify-between py-5  border-b border-gray-200`}
      >
        <View style={s`flex-row items-center `}>
          <Feather name="help-circle" size={24} color="#9ca3af" />
          <Text style={styles.text}>FAQ</Text>
        </View>
        <Feather name="chevron-right" size={20} color="black" />
      </Pressable>
      <Pressable
        style={s`flex-row items-center justify-between py-5  border-b border-gray-200`}
      >
        <View style={s`flex-row items-center `}>
          <Feather name="log-out" size={24} color="#9ca3af" />
          <Text style={styles.text}>Sign out</Text>
        </View>
      </Pressable>
    </SafeAreaView>
  );
};

export default Profile;

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
