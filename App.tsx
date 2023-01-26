import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import useCachedResources from "./src/hooks/useCachedResources";
import Navigation from "./src/navigation";

export default function App() {
  const isLoadingComplete = useCachedResources();
  if (!isLoadingComplete) {
    return null;
  } else {
    return (
      // <View style={styles.container}>
      //   <Text>Open up App.tsx to start working on your app!</Text>
      //   <StatusBar style="auto" />
      // </View>
      <>
        <Navigation />
        <StatusBar style="auto" />
      </>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
