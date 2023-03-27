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
import { PeopleContextProvider } from "./context/PeopleContext";
import { DecisionContextProvider } from "./context/DecisionContext";

const platformOS = Platform.OS.toLowerCase();

export default function App() {
  return (
    <PeopleContextProvider>
      <RestaurantContextProvider>
        <DecisionContextProvider>
          <NativeBaseProvider>
            <SafeAreaView style={styles.container}>
              <IOSTabNavigationScreen />
              {/* {platformOS === "android" ? (
              <AndroidTabNavigationScreen />
              ) : (
                <IOSTabNavigationScreen />
              )} */}
              <ExpoStatusBar style="auto" />
            </SafeAreaView>
          </NativeBaseProvider>
        </DecisionContextProvider>
      </RestaurantContextProvider>
    </PeopleContextProvider>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, width: "100%", paddingTop: StatusBar.currentHeight },
});
