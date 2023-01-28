import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  RefreshControl,
  StatusBar,
} from "react-native";
import React, { useState } from "react";
import { s } from "react-native-wind";
import { SafeAreaView } from "react-native-safe-area-context";
import { AntDesign, Entypo, FontAwesome5 } from "@expo/vector-icons";
import Header from "../components/Header";
import { Button, TextInput } from "react-native-paper";
import Modal from "react-native-modal";
import Navigation from "../navigation";
import { useNavigation } from "@react-navigation/native";

const Search = () => {
  const [showInfoModal, setShowInfoModal] = useState(false);
  const [refreshing, setRefreshing] = useState(false);
  const navigation = useNavigation();

  const onRefresh = () => {
    setRefreshing(true);
    setTimeout(() => {
      setRefreshing(false);
    }, 1000);
  };

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
        <View style={s`bg-white absolute p-5 h-full w-full bottom-0`}>
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
          <Text style={s`font-bold text-3xl mt-10`}>Select passengers</Text>
          <View>
            <View style={s`flex-row items-center justify-between mt-10`}>
              <Text style={s`text-lg font-semibold`}>Adults</Text>
              <View style={s`flex-row items-center w-32 justify-between`}>
                <TouchableOpacity
                  style={s`rounded-full  w-10 h-10 flex-row items-center justify-center border border-rose-400`}
                >
                  <AntDesign name="minus" size={24} color="black" />
                </TouchableOpacity>
                <Text style={s`text-xl font-bold`}>0</Text>
                <TouchableOpacity
                  style={s`rounded-full  w-10 h-10 flex-row items-center justify-center border border-rose-400`}
                >
                  <AntDesign name="plus" size={24} color="black" />
                </TouchableOpacity>
              </View>
            </View>
            <View style={s`flex-row items-center justify-between mt-10`}>
              <Text style={s`text-lg font-semibold`}>Children</Text>
              <View style={s`flex-row items-center w-32 justify-between`}>
                <TouchableOpacity
                  style={s`rounded-full  w-10 h-10 flex-row items-center justify-center border border-rose-400`}
                >
                  <AntDesign name="minus" size={24} color="black" />
                </TouchableOpacity>
                <Text style={s`text-xl font-bold`}>0</Text>
                <TouchableOpacity
                  style={s`rounded-full  w-10 h-10 flex-row items-center justify-center border border-rose-400`}
                >
                  <AntDesign name="plus" size={24} color="black" />
                </TouchableOpacity>
              </View>
            </View>
            <TouchableOpacity
              style={s`py-3 px-4 rounded bg-sky-500 mt-10`}
              onPress={() => setShowInfoModal(false)}
            >
              <Text style={s`text-white text-center font-medium `}>
                Validate
              </Text>
            </TouchableOpacity>
            {/* <View style={s`flex-row items-center justify-between mt-10`}>
              <Text>Adults</Text>
              <View style={s`flex-row items-center w-32 justify-between`}>
                <TouchableOpacity
                  style={s`rounded-full  w-10 h-10 flex-row items-center justify-center border border-rose-400`}
                >
                  <Text style={s`text-xl`}>-</Text>
                </TouchableOpacity>
                <Text style={s`text-xl`}>0</Text>
                <TouchableOpacity
                  style={s`rounded-full  w-10 h-10 flex-row items-center justify-center border border-rose-400`}
                >
                  <Text style={s`text-xl`}>+</Text>
                </TouchableOpacity>
              </View>
            </View> */}
          </View>
        </View>
      </Modal>
    );
  }
  return (
    <View style={s`flex-1`}>
      {/* <StatusBar barStyle="light-content" /> */}
      <Header />

      <ScrollView
        showsVerticalScrollIndicator={false}
        refreshControl={
          <RefreshControl
            refreshing={refreshing}
            onRefresh={() => onRefresh()}
          />
        }
      >
        <View
          style={s`mx-2 my-4 bg-white px-2 py-4 h-92 rounded-md border border-gray-300`}
        >
          {/* <TextInput
            style={s`rounded border border-gray-300 py-2 px-4`}
            placeholder="From ..."
          /> */}

          {/* <TextInput
            mode="outlined"
            label="from"
            placeholder="example Paris"
            // value={text}
            // onChangeText={(text) => setText(text)}
          /> */}
          <TouchableOpacity
            style={s`p-3 rounded mt-5 border border-gray-300`}
            //@ts-ignore
            onPress={() => navigation.navigate("Localization")}
          >
            <Text>De</Text>
          </TouchableOpacity>

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
          <TouchableOpacity
            style={s`p-3 rounded mt-5 border border-gray-300`}
            onPress={() => setShowInfoModal(!showInfoModal)}
          >
            <Text>1 adult</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={s`p-4 mt-5 bg-teal-500`}
            // onPress={() => setShowInfoModal(!showInfoModal)}
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
