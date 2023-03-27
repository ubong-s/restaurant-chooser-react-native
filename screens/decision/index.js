import { View } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import { DecisionTimeScreen } from "./DecisionTimeScreen";
import { WhosGoingScreen } from "./WhosGoingScreen";
import { PreFiltersScreen } from "./PreFiltersScreen";
import { ChoiceScreen } from "./ChoiceScreen";
import { PostChoiceScreen } from "./PostChoiceScreen";

const Stack = createStackNavigator();

const createScreenOptions = ({ route }) => {
  return {
    headerShown: false,
  };
};

export const DecisionScreen = () => {
  return (
    <View style={{ flex: 1 }}>
      <Stack.Navigator screenOptions={createScreenOptions}>
        <Stack.Screen name="Decision Time" component={DecisionTimeScreen} />
        <Stack.Screen
          options={{ headerShown: true }}
          name="Who's Going"
          component={WhosGoingScreen}
        />
        <Stack.Screen
          options={{ headerShown: true }}
          name="PreFilters"
          component={PreFiltersScreen}
        />
        <Stack.Screen
          options={{ headerShown: true }}
          name="Choice"
          component={ChoiceScreen}
        />
        <Stack.Screen name="Post Choice" component={PostChoiceScreen} />
      </Stack.Navigator>
    </View>
  );
};
