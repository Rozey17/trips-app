import { View, Text, Pressable } from "react-native";
import React, { useLayoutEffect, useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { s } from "react-native-wind";
import Header from "../components/Header";
import { useNavigation } from "@react-navigation/native";
import { Entypo, FontAwesome5 } from "@expo/vector-icons";
import Modal from "react-native-modal";

const SearchResults = () => {
  const [showModal, setShowModal] = useState(false);

  const navigation = useNavigation();
  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);

  return (
    <View style={s`flex-1  `}>
      <Header />
      <View style={s`p-2`}>
        <Pressable
          // @ts-ignore
          onPress={() => navigation.navigate("TripDetails")}
          style={s`p-2 rounded border border-gray-300 bg-white h-32 `}
        >
          <View style={s`flex-row justify-between h-3/5 pb-2`}>
            <View style={s`flex-row justify-between w-3/5 `}>
              <View style={s` justify-between  `}>
                <Text>23.40</Text>
                <Text>02.20</Text>
              </View>

              <Entypo name="flow-line" size={30} color="black" />

              <View style={s` justify-between `}>
                <Text>Brazzaville</Text>
                <Text>Pointe noire</Text>
              </View>
            </View>
            <Entypo name="chevron-small-down" size={24} color="black" />
          </View>

          <View
            style={s`border-t border-gray-300  flex-row justify-between items-center`}
          >
            <FontAwesome5 name="bus" size={20} color="#9ca3af" />
            <View>
              <Text style={s`flex-row justify-end text-2xl font-extrabold`}>
                XAF 25.000,00
              </Text>
              <Text style={s`text-xs`}>per passenger</Text>
            </View>
          </View>
        </Pressable>
        <Pressable
          // @ts-ignore
          onPress={() => navigation.navigate("TripDetails")}
          style={s`p-2 rounded border border-gray-300 bg-white h-32 mt-2`}
        >
          <View style={s`flex-row justify-between h-3/5 pb-2`}>
            <View style={s`flex-row justify-between w-3/5 `}>
              <View style={s` justify-between  `}>
                <Text>23.40</Text>
                <Text>02.20</Text>
              </View>

              <Entypo name="flow-line" size={30} color="black" />

              <View style={s` justify-between `}>
                <Text>Pointe noire</Text>

                <Text>Brazzaville</Text>
              </View>
            </View>
            <Entypo name="chevron-small-down" size={24} color="black" />
          </View>

          <View
            style={s`border-t border-gray-300  flex-row justify-between items-center`}
          >
            <FontAwesome5 name="plane" size={20} color="#9ca3af" />
            <View>
              <Text style={s`flex-row justify-end text-2xl font-extrabold`}>
                XAF 45.000,00
              </Text>
              <Text style={s`text-xs`}>per passenger</Text>
            </View>
          </View>
        </Pressable>
      </View>
    </View>
  );
};

export default SearchResults;
