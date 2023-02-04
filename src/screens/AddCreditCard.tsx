import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  TextInput,
} from "react-native";
import React, { useState } from "react";
import { s } from "react-native-wind";
import { useNavigation } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";
import VisaLogo from "../../assets/images/visa-logo-svgrepo-com.svg";
//@ts-ignore
import MasterCardLogo from "../../assets/images/mastercard-svgrepo-com.svg";
import DropDownPicker from "react-native-dropdown-picker";
import { SafeAreaView } from "react-native-safe-area-context";

const AddCreditCard = () => {
  const navigation = useNavigation();
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);
  const [items, setItems] = useState([
    { label: "Congo-Brazzaville", value: "Congo-Brazzaville" },
    { label: "RDC", value: "RDC" },
    { label: "Angola", value: "Angola" },
    { label: "Gabon", value: "Gabon" },
  ]);
  return (
    <SafeAreaView style={s`bg-white h-full`}>
      <View
        style={s`flex-row px-5 py-4 items-center justify-between bg-white border-b border-gray-300`}
      >
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons name="arrow-back" size={24} color="black" />
        </TouchableOpacity>
        <Text style={styles.title}>add credit card</Text>
        <Ionicons name="arrow-back" size={24} color="white" />
      </View>
      <View style={s`p-3`}>
        <View style={s`flex-row items-center w-36 justify-between`}>
          <VisaLogo />
          <MasterCardLogo />
        </View>

        <TextInput
          placeholder="Credit Card Number"
          style={[
            {
              fontFamily: "catamaran-regular",
              fontSize: 16,
              textTransform: "capitalize",
            },
            s`border border-gray-300 px-3 py-2 mb-5 capitalize`,
          ]}
          keyboardType="numeric"
        />
        <View style={s`flex-row justify-between mb-5`}>
          <TextInput
            placeholder="mm/yyyy"
            style={[
              { fontFamily: "catamaran-regular", fontSize: 16, width: "48%" },
              s`border border-gray-300 px-3 py-2  capitalize`,
            ]}
            keyboardType="numeric"
          />
          <TextInput
            placeholder="CVV"
            style={[
              { fontFamily: "catamaran-regular", fontSize: 16, width: "48%" },
              s`border border-gray-300 px-3 py-2  capitalize`,
            ]}
            keyboardType="numeric"
          />
        </View>
        <DropDownPicker
          open={open}
          value={value}
          items={items}
          setOpen={setOpen}
          setValue={setValue}
          setItems={setItems}
          placeholder="- Choose your country - "
          style={s`mb-5 rounded-none border border-gray-300`}
          dropDownContainerStyle={[
            { fontFamily: "catamaran-regular", fontSize: 16 },
            s` rounded-none border border-gray-300`,
          ]}
          textStyle={{
            fontFamily: "catamaran-regular",
            fontSize: 16,
          }}
        />
        <View style={s`flex-row justify-between mb-5`}>
          <TouchableOpacity style={[{ width: "48%" }, s`bg-gray-100 p-3 `]}>
            <Text style={s`text-center text-teal-400`}>Cancel</Text>
          </TouchableOpacity>
          <TouchableOpacity style={[{ width: "48%" }, s`bg-teal-400 p-3 `]}>
            <Text style={styles.button_text}>Save</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default AddCreditCard;

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
