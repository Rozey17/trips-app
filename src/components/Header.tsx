import { View, Text } from "react-native";
import React from "react";
import { s } from "react-native-wind";
import { SafeAreaView } from "react-native-safe-area-context";
import { LinearGradient } from "expo-linear-gradient";

const Header = () => {
  return (
    <LinearGradient
      // Background Linear Gradient
      colors={["#4c669f", "#3b5998", "#192f6a"]}
      style={s`h-28`}
    >
      <View style={s` `}>
        <SafeAreaView>
          <Text
            style={[
              { fontFamily: "josefinSans-bold", fontSize: 36 },
              s`z-10 p-4  text-white`,
            ]}
          >
            TicketGo
          </Text>
        </SafeAreaView>
      </View>
    </LinearGradient>
  );
};

export default Header;
