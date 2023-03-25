import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import { View } from "react-native";
import { StatusBar } from "react-native";
import { StyleSheet, Platform, SafeAreaView } from "react-native";
import {
  AndroidTabNavigationScreen,
  IOSTabNavigationScreen,
} from "./navigation/TabNavigationScreen";

const platformOS = Platform.OS.toLowerCase();

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      {platformOS === "android" ? (
        <AndroidTabNavigationScreen />
      ) : (
        <IOSTabNavigationScreen />
      )}

      <ExpoStatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, width: "100%", paddingTop: StatusBar.currentHeight },
});
