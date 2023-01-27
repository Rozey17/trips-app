import {
  View,
  Text,
  ScrollView,
  TextInput,
  TouchableOpacity,
} from "react-native";
import React, { useState } from "react";
import { s } from "react-native-wind";
import { SafeAreaView } from "react-native-safe-area-context";
import { AntDesign, Entypo, FontAwesome5 } from "@expo/vector-icons";
import Header from "../components/Header";
import { Button } from "react-native-paper";
import Modal from "react-native-modal";

const Search = () => {
  const [showInfoModal, setShowInfoModal] = useState(false);
  function renderInfoModal() {
    return (
      <Modal
        isVisible={showInfoModal}
        onBackdropPress={() => setShowInfoModal(false)}
        hideModalContentWhileAnimating={true}
        backdropTransitionOutTiming={0}
        style={{ margin: 0 }}
      >
        {/* Content */}
        <View
          // style={{
          //   backgroundColor: "white",
          //   position: "absolute",
          //   width: "100%",
          //   bottom: 0,
          //   paddingHorizontal: 28,
          //   paddingVertical: 40,

          // }}
          style={s`bg-white absolute p-5 h-full w-full bottom-0`}
        >
          <TouchableOpacity
            style={{
              position: "absolute",
              right: 0,
              top: 0,
              padding: 16,
            }}
            onPress={() => setShowInfoModal(false)}
          >
            <AntDesign name="close" size={24} color="black" />
          </TouchableOpacity>
        </View>
      </Modal>
    );
  }
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

          <TouchableOpacity
            style={s`p-3 rounded mt-5 bg-sky-500`}
            onPress={() => setShowInfoModal(!showInfoModal)}
          >
            <Text style={s` text-white font-medium text-center`}>Search</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
      {renderInfoModal()}
    </View>
  );
};



export default Search;
