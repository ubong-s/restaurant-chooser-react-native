import { useState } from "react";
import {
  Alert,
  AsyncStorage,
  BackHandler,
  FlatList,
  Image,
  Modal,
  Picker,
  ssPlatform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import { CheckBox, Button } from "native-base";
import { usePeopleContext } from "../../context/PeopleContext";
import { useRestaurantContext } from "../../context/RestaurantContext";

export const DecisionTimeScreen = ({ navigation }) => {
  const { people } = usePeopleContext();
  const { restaurants } = useRestaurantContext();

  return (
    <View style={styles.decisionTimeScreenContainer}>
      <TouchableOpacity
        style={styles.decisionTimeScreenTouchable}
        onPress={() => {
          if (people.length === 0) {
            Alert.alert(
              "That ain't gonna work, chief",
              "You haven't added any people. " +
                "You should probably do that first, no?",
              [
                {
                  text: "OK",
                  onPress: () => navigation.navigate("Add Person"),
                },
              ],
              { cancelable: false }
            );
          } else {
            if (restaurants.length === 0) {
              Alert.alert(
                "That ain't gonna work, chief",
                "You haven't added any restaurants. " +
                  "You should probably do that first, no?",
                [
                  {
                    text: "OK",
                    onPress: () => navigation.navigate("Add Restaurant"),
                  },
                ],
                { cancelable: false }
              );
            } else {
              navigation.navigate("Who's Going");
            }
          }
        }}
      >
        <Image source={require("../../assets/its-decision-time.png")} />
        <Text style={{ paddingTop: 20 }}>(click the food to get going)</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  decisionTimeScreenContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  decisionTimeScreenTouchable: {
    alignItems: "center",
    justifyContent: "center",
  },
});
