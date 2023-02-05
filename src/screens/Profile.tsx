import {
  View,
  Text,
  Image,
  StyleSheet,
  Pressable,
  StatusBar,

} from "react-native";
import React, { useLayoutEffect } from "react";
import { s } from "react-native-wind";
import { SafeAreaView } from "react-native-safe-area-context";
import { Feather } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

const Profile = () => {
  const navigation = useNavigation();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);
  return (
    <SafeAreaView style={s`flex-1 p-4 bg-white`}>
      <StatusBar barStyle="dark-content" />

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
          <Text style={styles.text2}>Lorem ipsum dolor sit, amet</Text>
        </View>
      </View>
      <Pressable
        style={s`flex-row items-center justify-between py-5 border-t  border-gray-200 `}
        //@ts-ignore
        onPress={() => navigation.navigate("PersonalInfo")}
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
        //@ts-ignore
        onPress={() => navigation.navigate("PaymentMethod")}
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
          <Feather name="settings" size={24} color="#9ca3af" />
          <Text style={styles.text}>Settings</Text>
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
    fontFamily: "catamaran-medium",
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
