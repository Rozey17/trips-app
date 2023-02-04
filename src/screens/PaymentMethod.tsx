import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  StyleSheet,
  Pressable,
  Image,
  StatusBar,
} from "react-native";
import React, { useLayoutEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import { SafeAreaView } from "react-native-safe-area-context";
import { s } from "react-native-wind";
import { Entypo, Ionicons } from "@expo/vector-icons";
//@ts-ignore
import GooglePay from "../../assets/images/google-pay-svgrepo-com.svg";
//@ts-ignore
import ApplePay from "../../assets/images/apple-pay-logo-svgrepo-com.svg";
//@ts-ignore
import PayPal from "../../assets/images/paypal-3-svgrepo-com.svg";

const PaymentMethod = () => {
  const navigation = useNavigation();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);
  return (
    <SafeAreaView style={s`h-full bg-white`}>
      <StatusBar barStyle="dark-content" />

      <View style={s`flex-row px-5 py-4 items-center justify-between`}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons name="arrow-back" size={24} color="black" />
        </TouchableOpacity>
        <Text style={styles.title}>payment method</Text>
        <Ionicons name="arrow-back" size={24} color="white" />
      </View>

      <ScrollView style={s`p-5`}>
        <Pressable
          style={s`flex-row items-center justify-between border-t border-b border-gray-300 py-2`}
        >
          <GooglePay />

          <Text>Add +</Text>
        </Pressable>
        <Pressable
          style={s`flex-row items-center justify-between border-b border-gray-300 py-2`}
        >
          <ApplePay />
          <Text>Add +</Text>
        </Pressable>
        <Pressable
          style={s`flex-row items-center justify-between border-b border-gray-300 py-2`}
        >
          <PayPal />
          <Text>Add +</Text>
        </Pressable>
        
        <TouchableOpacity onPress={()=>navigation.navigate('AddCreditCard')}
          style={s`bg-gray-200 py-3 flex-row items-center justify-center mt-5`}
        >
          <Entypo name="plus" size={24} color="#2dd4bf" />
          <Text style={styles.text}>add a credit card</Text>
        </TouchableOpacity>
      </ScrollView>
      
    </SafeAreaView>
  );
};

export default PaymentMethod;

const styles = StyleSheet.create({
  title: {
    fontFamily: "josefinSans-bold",
    fontSize: 20,

    // fontSize: 36,
    textTransform: "capitalize",
    // fontWeight: "bold",
  },
  text: {
    fontFamily: "catamaran-medium",
    marginLeft: 10,
    fontSize: 16,
    color: "#2dd4bf",
    textTransform: "capitalize",
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
