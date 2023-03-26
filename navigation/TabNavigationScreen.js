import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";

import { PeopleScreen } from "../screens/PeopleScreen";
import { DecisionScreen } from "../screens/DecisionScreen";
import { RestaurantsScreen } from "../screens/RestaurantsScreen";
import { Ionicons } from "@expo/vector-icons";
import { Platform } from "react-native";

const IOSTab = createBottomTabNavigator();
const AndroidTab = createMaterialTopTabNavigator();

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
    swipeEnabled: Platform.OS === "android" ? true : null,
  };
};

export const IOSTabNavigationScreen = () => {
  return (
    <NavigationContainer>
      <IOSTab.Navigator screenOptions={createScreenOptions}>
        <IOSTab.Screen name="People" component={PeopleScreen} />
        <IOSTab.Screen name="Decision" component={DecisionScreen} />
        <IOSTab.Screen name="Restaurants" component={RestaurantsScreen} />
      </IOSTab.Navigator>
    </NavigationContainer>
  );
};

export const AndroidTabNavigationScreen = () => {
  return (
    <NavigationContainer>
      <AndroidTab.Navigator screenOptions={createScreenOptions}>
        <AndroidTab.Screen name="People" component={PeopleScreen} />
        <AndroidTab.Screen name="Decision" component={DecisionScreen} />
        <AndroidTab.Screen name="Restaurants" component={RestaurantsScreen} />
      </AndroidTab.Navigator>
    </NavigationContainer>
  );
};
