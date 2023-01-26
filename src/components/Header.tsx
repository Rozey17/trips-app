import { View, Text } from "react-native";
import React from "react";
import { s } from "react-native-wind";
import { Entypo } from "@expo/vector-icons";
import CartIcon from "./CartIcon";
import { SafeAreaView } from "react-native-safe-area-context";

const Header = () => {
  return (
    <View style={s`bg-rose-500 h-28`}>
      <SafeAreaView>
        <Text
          style={[{ fontFamily: "jost-bold" }, s` p-4 text-3xl text-white`]}
        >
          TicketGo
        </Text>
      </SafeAreaView>
    </View>
  );
};

export default Header;
