import {
  View,
  Text,
  Dimensions,
  FlatList,
  ImageBackground,
  Button,
  TouchableOpacity,
  Pressable,
  Image,
  StatusBar,
} from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { useNavigation } from "@react-navigation/native";
import { BlurView, VibrancyView } from "@react-native-community/blur";
import { s } from "react-native-wind";

const slides = [
  {
    title: "Welcome to\nTicketGo!",
    description:
      "Labore sunt culpa excepteur culpa\nipsum. Labore occaecat ex nisi mollit.",
    image: "https://images.pexels.com/photos/333525/pexels-photo-333525.jpeg",
  },
  {
    title: "Booking in\nminutes!",
    description:
      "Labore sunt culpa excepteur culpa\nipsum. Labore occaecat ex nisi mollit.",
    // image: "https://images.pexels.com/photos/2045249/pexels-photo-2045249.jpeg",
    image: "https://images.pexels.com/photos/946281/pexels-photo-946281.jpeg",
  },
  {
    title: "Enjoy your\ntrip!",
    description:
      "Labore sunt culpa excepteur culpa\nipsum. Labore occaecat ex nisi mollit.",
    image: "https://images.pexels.com/photos/1656377/pexels-photo-1656377.jpeg",
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
              height: "100%",
              justifyContent: "flex-end",
              paddingHorizontal: 20,
            }}
            source={{ uri: item.image }}
          >
            <SafeAreaView>
              <StatusBar barStyle="light-content" />
              <View
                style={{
                  alignSelf: "center",
                  marginBottom: 18,
                }}
              >
                {/* <svg.LogoSvg /> */}
                <Image
                  source={{
                    uri: "https://takitchgraphics.com/wp-content/uploads/2020/06/cropped-TG-Logo_tp.png",
                  }}
                  style={s`object-contain h-20 w-20`}
                />
              </View>
              <View
                style={{
                  height: 204,
                  marginBottom: 185,
                  // borderColor: "black",
                  // borderWidth: 1,
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
                    fontSize: 45,
                    marginBottom: 13,
                    fontFamily: "josefinSans-bold",
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
      <Pressable
        style={{
          width: "90%",
          marginHorizontal: 20,
          marginBottom: 54,
          position: "absolute",
          bottom: 0,
          padding: 15,
          backgroundColor: "#2dd4bf",
          //   borderWidth: 1,
          //   borderRadius: 10,
        }}
        //@ts-ignore
        onPress={() => navigation.navigate("Root")}
      >
        <Text
          style={{
            textAlign: "center",
            color: "white",
            fontSize: 16,
            fontFamily: "catamaran-medium",
          }}
        >
          Get Started
        </Text>
      </Pressable>
    </View>
  );
};

export default OnBoarding;
