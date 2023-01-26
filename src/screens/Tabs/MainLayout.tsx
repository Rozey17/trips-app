import React, { useState } from "react";
import { View, Text, TouchableOpacity, StatusBar } from "react-native";
import Inbox from "../Inbox";
import Profile from "../Profile";
import Search from "../Search";
import Trips from "../Trips";
import Wishlist from "../Wishlist";
import { FontAwesome5 } from "@expo/vector-icons";
import { s } from "react-native-wind";
import { useNavigation } from "@react-navigation/native";
/* Screens */

export default function MainLayout() {
  const [selectedBottomTab, setSelectedBottomTab] = useState("Search");
  // const navigation = useNavigation()
  const TABS = [
    {
      id: "1",
      text: "Search",
      icon: (
        <FontAwesome5
          name="search"
          size={20}
          color={selectedBottomTab == "Search" ? "#22d3ee" : "#d1d5db"}
        />
      ),
    },
    {
      id: "2",
      text: "Wishlist",
      icon: (
        <FontAwesome5
          name="heart"
          size={20}
          color={selectedBottomTab == "Wishlist" ? "#22d3ee" : "#d1d5db"}
        />
      ),
    },
    {
      id: "3",
      text: "Trips",
      icon: (
        <FontAwesome5
          name="suitcase"
          size={20}
          color={selectedBottomTab == "Trips" ? "#22d3ee" : "#d1d5db"}
        />
      ),
    },
    {
      id: "4",
      text: "Inbox",
      icon: (
        <FontAwesome5
          name="inbox"
          size={20}
          color={selectedBottomTab == "Inbox" ? "#22d3ee" : "#d1d5db"}
        />
      ),
    },
    {
      id: "5",
      text: "Profile",
      icon: (
        <FontAwesome5
          name="user-circle"
          size={20}
          color={selectedBottomTab == "Profile" ? "#22d3ee" : "#d1d5db"}
        />
      ),
    },
  ];

  return (
    <View style={{ flex: 1, backgroundColor: "" }}>
      {selectedBottomTab == "Inbox" && <Inbox />}
      {selectedBottomTab == "Search" && <Search />}
      {selectedBottomTab == "Profile" && <Profile />}
      {selectedBottomTab == "Trips" && <Trips />}
      {selectedBottomTab == "Wishlist" && <Wishlist />}
      {/* Tabs */}
      <View style={s`w-full px-4 py-2 flex-row justify-between bg-white`}>
        {TABS.map((item, index) => (
          <TouchableOpacity
            key={index}
            activeOpacity={0.5}
            onPress={() => {
              setSelectedBottomTab(item.text);
            }}
          >
            <View style={{ alignItems: "center" }}>
              {item.icon}

              <Text
                style={{
                  fontFamily: "jost-medium",
                  fontSize: 14,
                  // lineHeight: 21,
                  marginTop: 5,
                  color: selectedBottomTab == item.text ? "#22d3ee" : "#d1d5db",
                }}
              >
                {item.text}
              </Text>
            </View>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
}
