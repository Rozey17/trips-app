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
      style={s`h-24`}
    >
      <View style={s` `}>
        <SafeAreaView>
          <Text
            style={[
              {
                fontFamily: "josefinSans-bold",
                fontSize: 25,
                textTransform: "uppercase",
              },
              s` p-2 pt-3  text-white`,
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
