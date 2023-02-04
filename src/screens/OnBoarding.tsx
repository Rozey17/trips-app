import {
  View,
  Text,
  Dimensions,
  FlatList,
  ImageBackground,
  Button,
  TouchableOpacity,
} from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { useNavigation } from "@react-navigation/native";
import { BlurView, VibrancyView } from "@react-native-community/blur";

const slides = [
  {
    title: "Welcome to\nBravel!",
    description:
      "Labore sunt culpa excepteur culpa\nipsum. Labore occaecat ex nisi mollit.",
    image: "https://dl.dropbox.com/s/ignnjnfhzuxv5g0/01.jpg?dl=0",
  },
  {
    title: "Booking in\nminutes!",
    description:
      "Labore sunt culpa excepteur culpa\nipsum. Labore occaecat ex nisi mollit.",
    image: "https://dl.dropbox.com/s/rkwu1w7n0xzb985/02.jpg?dl=0",
  },
  {
    title: "Enjoy your\ntrip!",
    description:
      "Labore sunt culpa excepteur culpa\nipsum. Labore occaecat ex nisi mollit.",
    image: "https://dl.dropbox.com/s/xcr5hl5eai968yp/03.jpg?dl=0",
  },
];

const OnBoarding = () => {
  const navigation = useNavigation();
  const { width, height } = Dimensions.get("window");
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);

  function updateCurrentSlideIndex(e: any) {
    const contentOffsetX = e.nativeEvent.contentOffset.x;
    const currentIndex = Math.round(contentOffsetX / width);
    setCurrentSlideIndex(currentIndex);
  }
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: "white",
      }}
    >
      <FlatList
        data={slides}
        horizontal={true}
        pagingEnabled={true}
        showsHorizontalScrollIndicator={false}
        onMomentumScrollEnd={updateCurrentSlideIndex}
        bounces={false}
        renderItem={({ item }) => (
          <ImageBackground
            style={{
              width: width,
              height: height,
              justifyContent: "flex-end",
              paddingHorizontal: 20,
            }}
            source={{ uri: item.image }}
          >
            <SafeAreaView>
              <View
                style={{
                  alignSelf: "center",
                  marginBottom: 18,
                }}
              >
                {/* <svg.LogoSvg /> */}
              </View>
              <View
                style={{
                  height: 204,
                  marginBottom: 138,
                }}
              >
                <View
                  style={{
                    height: 138,
                    width: "100%",
                    position: "absolute",
                    backgroundColor: "white",
                    borderRadius: 10,
                    bottom: 0,
                    opacity: 0.7,
                  }}
                  //   blurType="light"
                  //   blurAmount={90}
                  //   reducedTransparencyFallbackColor="white"
                />
                <Text
                  style={{
                    textAlign: "center",
                    color: "white",

                    marginBottom: 13,
                  }}
                >
                  {item.title}
                </Text>
                <Text
                  style={{
                    textAlign: "center",
                    color: "white",
                    fontFamily: "catamaran-regular",
                    fontSize: 18,
                    lineHeight: 18 * 1.6,
                  }}
                >
                  {item.description}
                </Text>
              </View>

              {/* <components.Button
                                title="Get Started"
                                containerStyle={{
                                    marginBottom: 20,
                                }}
                            /> */}
            </SafeAreaView>
          </ImageBackground>
        )}
      />
      <View
        style={{
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "row",
          position: "absolute",
          bottom: 0,
          marginBottom: 144,
          alignSelf: "center",
        }}
      >
        {slides.map((_, index) => {
          return (
            <View
              key={index}
              style={[
                {
                  width: 8,
                  height: 8,
                  marginHorizontal: 4,
                  borderRadius: 8 / 2,
                  backgroundColor: "white",
                  opacity: 0.5,
                },
                currentSlideIndex == index && {
                  opacity: 1,
                },
              ]}
            />
          );
        })}
      </View>
      <TouchableOpacity
        // title="Get Started"
        style={{
          marginBottom: 54,
          position: "absolute",
          bottom: 0,
          paddingHorizontal: 20,
        }}
        //@ts-ignore
        onPress={() => navigation.navigate("Root")}
      >
        <Text>Get Started</Text>
      </TouchableOpacity>
    </View>
  );
};

export default OnBoarding;
