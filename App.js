import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Platform } from "react-native";
import Constants from "expo-constants";
import { Ionicons } from "@expo/vector-icons";

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";

import { DecisionScreen } from "./screens/DecisionScreen";
import { PeopleScreen } from "./screens/PeopleScreen";
import { RestaurantsScreen } from "./screens/RestaurantsScreen";

const Tab = createBottomTabNavigator();

const TAB_ICON = {
  Restaurants: "restaurant",
  Decision: "bookmark",
  People: "people",
};

const createScreenOptions = ({ route }) => {
  const iconName = TAB_ICON[route.name];

  return {
    tabBarIcon: ({ size, color }) => {
      return <Ionicons name={iconName} size={size} color={color} />;
    },
    tabBarActiveTintColor: "tomato",
    tabBarInactiveTintColor: "gray",
    headerShown: false,
  };
};

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator screenOptions={createScreenOptions}>
        <Tab.Screen name="People" component={PeopleScreen} />
        <Tab.Screen name="Decision" component={DecisionScreen} />
        <Tab.Screen name="Restaurants" component={RestaurantsScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
