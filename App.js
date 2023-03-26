import "react-native-gesture-handler";
import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import { StatusBar } from "react-native";
import { NativeBaseProvider } from "native-base";
import { StyleSheet, Platform, SafeAreaView } from "react-native";
import {
  AndroidTabNavigationScreen,
  IOSTabNavigationScreen,
} from "./navigation/TabNavigationScreen";
import { RestaurantContextProvider } from "./context/RestaurantContext";

const platformOS = Platform.OS.toLowerCase();

export default function App() {
  return (
    <RestaurantContextProvider>
      <NativeBaseProvider>
        <SafeAreaView style={styles.container}>
          {platformOS === "android" ? (
            <AndroidTabNavigationScreen />
          ) : (
            <IOSTabNavigationScreen />
          )}

          <ExpoStatusBar style="auto" />
        </SafeAreaView>
      </NativeBaseProvider>
    </RestaurantContextProvider>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, width: "100%", paddingTop: StatusBar.currentHeight },
});
