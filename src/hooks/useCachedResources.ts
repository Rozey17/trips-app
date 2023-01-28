import { View, Text } from "react-native";
import React, { useEffect, useState } from "react";
import * as Font from "expo-font";

const useCachedResources = () => {
  const [isLoadingComplete, setIsLoadingComplete] = useState(false);
  useEffect(() => {
    async function loadResourcesAndDataAsync() {
      try {
        await Font.loadAsync({
          // "jost-thin": require("../../assets/fonts/jost/Jost-Thin.ttf"),
          // "jost-regular": require("../../assets/fonts/jost/Jost-Regular.ttf"),
          // "jost-medium": require("../../assets/fonts/jost/Jost-Medium.ttf"),
          // "jost-semibold": require("../../assets/fonts/jost/Jost-SemiBold.ttf"),
          // "jost-bold": require("../../assets/fonts/jost/Jost-Bold.ttf"),
          // "jost-extrabold": require("../../assets/fonts/jost/Jost-ExtraBold.ttf"),
          "josefinSans-thin": require("../../assets/fonts/JosefinSans-Thin.ttf"),
          "josefinSans-light": require("../../assets/fonts/JosefinSans-Light.ttf"),
          "josefinSans-regular": require("../../assets/fonts/JosefinSans--Regular.ttf"),
          "josefinSans-medium": require("../../assets/fonts/JosefinSans-Medium.ttf"),
          "josefinSans-semibold": require("../../assets/fonts/JosefinSans-SemiBold.ttf"),
          "josefinSans-bold": require("../../assets/fonts/JosefinSans-Bold.ttf"),
          "catamaran-regular": require("../../assets/fonts/Catamaran-Regular.ttf"),
          "catamaran-medium": require("../../assets/fonts/Catamaran-Medium.ttf"),
        });
      } catch (error) {
        console.warn(error);
      } finally {
        setIsLoadingComplete(true);
      }
    }
    loadResourcesAndDataAsync();
  }, []);

  return isLoadingComplete;
};

export default useCachedResources;
