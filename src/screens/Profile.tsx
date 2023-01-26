import { View, Text } from "react-native";
import React from "react";
import { s } from "react-native-wind";
import { SafeAreaView } from "react-native-safe-area-context";

const Profile = () => {
  return (
    <SafeAreaView style={s`flex-1`}>
      <View style={s``}>
        <Text>Profile</Text>
      </View>
    </SafeAreaView>
  );
};

export default Profile;
