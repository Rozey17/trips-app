import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  RefreshControl,
  StatusBar,
} from "react-native";
import React, { useLayoutEffect, useState } from "react";
import { s } from "react-native-wind";
import { AntDesign, Entypo, FontAwesome5 } from "@expo/vector-icons";
import Header from "../components/Header";
import Modal from "react-native-modal";
import Navigation from "../navigation/RootNavigation";
import { useNavigation } from "@react-navigation/native";
import DatePicker from "../components/DatePicker";

const Search = () => {
  const [showInfoModal, setShowInfoModal] = useState(false);
  const [refreshing, setRefreshing] = useState(false);
  const [numberOfAdults, setNumberOfAdults] = useState(1);
  const [numberOfChildren, setNumberOfChildren] = useState(1);

  const addAnAdult = () => {
    setNumberOfAdults(numberOfAdults + 1);
  };

  const addAChild = () => {
    setNumberOfChildren(numberOfChildren + 1);
  };

  const removeAnAdult = () => {
    if (numberOfAdults === 1) return;
    setNumberOfAdults(numberOfAdults - 1);
  };
  const removeAChild = () => {
    if (numberOfChildren === 1) return;
    setNumberOfChildren(numberOfChildren - 1);
  };

  const navigation = useNavigation();
  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);

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
        style={s`m-0`}
        // style={[{ marginLeft: "auto", marginRight: "auto" }, s`w-5/6`]}
      >
        {/* Content */}
        <View
          style={s`bg-white absolute bottom-0 p-5 h-80 w-full rounded-tr-xl rounded-tl-xl`}
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
            <AntDesign name="close" size={18} color="black" />
          </TouchableOpacity>
          {/* <Text style={s`font-bold text-3xl mt-10`}>Select passengers</Text> */}
          <View>
            <View style={s`flex-row items-center justify-between mt-10`}>
              <View style={s`flex-row items-center `}>
                <FontAwesome5 name="users" size={20} color="black" />
                <Text
                  style={{
                    fontFamily: "catamaran-medium",
                    fontSize: 17,
                    marginLeft: 10,
                  }}
                >
                  Adults
                </Text>
              </View>
              <View style={s`flex-row items-center w-32 justify-between`}>
                <TouchableOpacity
                  onPress={removeAnAdult}
                  style={s`rounded-full  w-10 h-10 flex-row items-center justify-center border border-teal-400`}
                >
                  <AntDesign name="minus" size={18} color="black" />
                </TouchableOpacity>
                <Text style={{ fontFamily: "catamaran-medium", fontSize: 18 }}>
                  {numberOfAdults}
                </Text>
                <TouchableOpacity
                  onPress={addAnAdult}
                  style={s`rounded-full  w-10 h-10 flex-row items-center justify-center border border-teal-400`}
                >
                  <AntDesign name="plus" size={18} color="black" />
                </TouchableOpacity>
              </View>
            </View>
            <View style={s`flex-row items-center justify-between mt-10`}>
              <View style={s`flex-row items-center `}>
                <FontAwesome5 name="child" size={20} color="black" />
                <Text
                  style={{
                    fontFamily: "catamaran-medium",
                    fontSize: 17,
                    marginLeft: 10,
                  }}
                >
                  Children
                </Text>
              </View>
              <View style={s`flex-row items-center w-32 justify-between`}>
                <TouchableOpacity
                  onPress={removeAChild}
                  style={s`rounded-full  w-10 h-10 flex-row items-center justify-center border border-teal-400`}
                >
                  <AntDesign name="minus" size={18} color="black" />
                </TouchableOpacity>
                <Text style={{ fontFamily: "catamaran-medium", fontSize: 18 }}>
                  {numberOfChildren}
                </Text>
                <TouchableOpacity
                  onPress={addAChild}
                  style={s`rounded-full  w-10 h-10 flex-row items-center justify-center border border-teal-400`}
                >
                  <AntDesign name="plus" size={18} color="black" />
                </TouchableOpacity>
              </View>
            </View>
            <TouchableOpacity
              style={s`py-3 px-4 bg-teal-400 mt-10`}
              onPress={() => setShowInfoModal(false)}
            >
              <Text
                style={{
                  fontFamily: "catamaran-medium",
                  color: "white",
                  textAlign: "center",
                  fontSize: 17,
                }}
              >
                Validate
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    );
  }
  return (
    <View>
      <StatusBar barStyle="light-content" />
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
        <View style={s`mx-2 my-4 bg-white p-4  border border-gray-300`}>
          <TouchableOpacity
            style={s`p-3 border border-gray-300`}
            //@ts-ignore
            onPress={() => navigation.navigate("Localization")}
          >
            <Text>From</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={s`p-3  mt-5 border border-gray-300`}
            //@ts-ignore
            onPress={() => navigation.navigate("Localization")}
          >
            <Text>To</Text>
          </TouchableOpacity>

          <View style={s`flex-row items-center mt-5`}>
            <View style={s`w-2/5 mr-3`}>
              <Text>Aller</Text>
              <DatePicker />
            </View>

            <View style={s`flex-1`}>
              <Text>Retour</Text>
              <DatePicker />
            </View>
          </View>

          <TouchableOpacity
            style={s`p-3  mt-5 border border-gray-300`}
            onPress={() => setShowInfoModal(!showInfoModal)}
          >
            <Text>1 adult</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={s`py-3 mt-5 bg-teal-500`}
            //@ts-ignore
            onPress={() => navigation.navigate("SearchResults")}
          >
            <Text
              style={{
                fontFamily: "catamaran-medium",
                textAlign: "center",
                color: "white",
                fontSize: 17,
              }}
            >
              Search
            </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
      {renderInfoModal()}
    </View>
  );
};



export default Search;
