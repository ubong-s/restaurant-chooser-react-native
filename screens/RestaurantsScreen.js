import {
  Alert,
  View,
  FlatList,
  Platform,
  ScrollView,
  Text,
  StyleSheet,
  BackHandler,
} from "react-native";
import { CustomButton } from "../components/CustomButton";
import { CustomTextInput } from "../components/CustomTextInput";
import { createStackNavigator } from "@react-navigation/stack";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Picker } from "native-base";
import { ListScreen } from "./ListScreen";
import { AddScreen } from "./AddScreen";

const Stack = createStackNavigator();

const createScreenOptions = ({ route }) => {
  return {
    headerShown: false,
  };
};

export const RestaurantsScreen = () => {
  return (
    <View style={{ flex: 1 }}>
      <Stack.Navigator screenOptions={createScreenOptions}>
        <Stack.Screen name="Restaurant List" component={ListScreen} />
        <Stack.Screen
          options={{ headerShown: true }}
          name="Add Restaurant"
          component={AddScreen}
        />
      </Stack.Navigator>
    </View>
  );
};
