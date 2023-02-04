import { StatusBar } from "expo-status-bar";
import { StyleSheet } from "react-native";
import "react-native-gesture-handler";
import { Provider } from "react-redux";
import { Provider as PaperProvider } from "react-native-paper";
import Navigation from "./src/navigation/RootNavigation";
import { ToastProvider } from "react-native-toast-notifications";
import { store } from "./src/store/store";
import { useFonts } from "expo-font";
import { SafeAreaProvider } from "react-native-safe-area-context";

export default function App() {
  let [fontsLoaded] = useFonts({
    "josefinSans-thin": require("./assets/fonts/JosefinSans-Thin.ttf"),
    "josefinSans-light": require("./assets/fonts/JosefinSans-Light.ttf"),
    "josefinSans-regular": require("./assets/fonts/JosefinSans-Regular.ttf"),
    "josefinSans-medium": require("./assets/fonts/JosefinSans-Medium.ttf"),
    "josefinSans-semibold": require("./assets/fonts/JosefinSans-SemiBold.ttf"),
    "josefinSans-bold": require("./assets/fonts/JosefinSans-Bold.ttf"),
    "catamaran-regular": require("./assets/fonts/Catamaran-Regular.ttf"),
    "catamaran-medium": require("./assets/fonts/Catamaran-Medium.ttf"),
    "catamaran-semibold": require("./assets/fonts/Catamaran-SemiBold.ttf"),
    "catamaran-bold": require("./assets/fonts/Catamaran-Bold.ttf"),
    "catamaran-black": require("./assets/fonts/Catamaran-Black.ttf"),
  });

  if (!fontsLoaded) {
    return null;
  } else {
    return (
      // <ToastProvider>
      <PaperProvider>
        <SafeAreaProvider>
          <Provider store={store}>
            <Navigation />
            <StatusBar style="auto" />
          </Provider>
        </SafeAreaProvider>
      </PaperProvider>
      // </ToastProvider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
