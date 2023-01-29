import { StatusBar } from "expo-status-bar";
import { StyleSheet } from "react-native";
import "react-native-gesture-handler";
import { Provider } from "react-redux";
import { Provider as PaperProvider } from "react-native-paper";
import Navigation from "./src/navigation/RootNavigation";
import { ToastProvider } from "react-native-toast-notifications";
import { store } from "./src/store/store";
import { useFonts } from "expo-font";

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
  });
  // const isLoadingComplete = useCachedResources();
  if (!fontsLoaded) {
    return null;
  } else {
    return (
      <ToastProvider>
        <PaperProvider>
          <Provider store={store}>
            <Navigation />
            <StatusBar style="auto" />
          </Provider>
        </PaperProvider>
      </ToastProvider>
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
