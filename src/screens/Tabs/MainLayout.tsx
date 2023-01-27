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
          color={selectedBottomTab == "Search" ? "#fb7185" : "#9ca3af"}
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
          color={selectedBottomTab == "Wishlist" ? "#fb7185" : "#9ca3af"}
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
          color={selectedBottomTab == "Trips" ? "#fb7185" : "#9ca3af"}
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
          color={selectedBottomTab == "Inbox" ? "#fb7185" : "#9ca3af"}
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
          color={selectedBottomTab == "Profile" ? "#fb7185" : "#9ca3af"}
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
      <View
        style={s`w-full px-6 py-3 flex-row justify-between bg-white border-t border-gray-200`}
      >
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
                  color: selectedBottomTab == item.text ? "#fb7185" : "#9ca3af",
                }}
              >
                {item.text}
              </Text>
            </View>
          </TouchableOpacity>
        ))}
      </View>

      {selectedBottomTab == "Inbox" && <StatusBar barStyle="light-content" />}
      {selectedBottomTab == "Search" && <StatusBar barStyle="light-content" />}
      {selectedBottomTab == "Profile" && <StatusBar barStyle="light-content" />}
      {selectedBottomTab == "Trips" && <StatusBar barStyle="light-content" />}
      {selectedBottomTab == "Wishlist" && (
        <StatusBar barStyle="light-content" />
      )}
    </View>
  );
}
