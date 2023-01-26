import {
  View,
  Text,
  ScrollView,
  TextInput,
  TouchableOpacity,
} from "react-native";
import React from "react";
import { s } from "react-native-wind";
import { SafeAreaView } from "react-native-safe-area-context";
import { Entypo, FontAwesome5 } from "@expo/vector-icons";
import Header from "../components/Header";
import { Button } from "react-native-paper";

const Search = () => {
  return (
    <View style={s`flex-1`}>
      <Header />

      <ScrollView showsVerticalScrollIndicator={false}>
        <View
          style={s`mx-2 my-4 bg-white px-2 py-4 h-92 rounded-md border border-gray-300`}
        >
          <TextInput
            style={s`rounded border border-gray-300 py-2 px-4`}
            placeholder="From ..."
          />
          <TextInput
            style={s`rounded border border-gray-300 py-2 px-4 mt-4`}
            placeholder="To ..."
          />
          {/* <TextInput /> */}
          <View style={s`flex-row items-center justify-between mt-4`}>
            <TextInput
              style={s`rounded border border-gray-300 py-2 px-4 w-44 `}
              placeholder="From ..."
            />
            <TextInput
              style={s`rounded border border-gray-300 py-2 px-4 w-44`}
              placeholder="To ..."
            />
          </View>
          <TextInput
            style={s`rounded border border-gray-300 py-2 px-4 mt-5`}
            placeholder="To ..."
          />

          <TouchableOpacity style={s`p-3 rounded mt-5 bg-sky-500`}>
            <Text style={s` text-white font-medium text-center`}>Search</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
};

export default Search;
