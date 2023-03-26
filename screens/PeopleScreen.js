import { View } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import { PeopleListScreen } from "./PeopleListScreen";
import { AddPersonScreen } from "./AddPersonScreen";

const Stack = createStackNavigator();

const createScreenOptions = ({ route }) => {
  return {
    headerShown: false,
  };
};

export const PeopleScreen = () => {
  return (
    <View style={{ flex: 1 }}>
      <Stack.Navigator screenOptions={createScreenOptions}>
        <Stack.Screen name="People List" component={PeopleListScreen} />
        <Stack.Screen
          options={{ headerShown: true }}
          name="Add Person"
          component={AddPersonScreen}
        />
      </Stack.Navigator>
    </View>
  );
};
