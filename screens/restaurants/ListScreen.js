import React, { useEffect } from "react";
import {
  FlatList,
  View,
  Platform,
  StyleSheet,
  Text,
  Alert,
  BackHandler,
} from "react-native";
import { useToast, Button } from "native-base";
import { useRestaurantContext } from "../../context/RestaurantContext";

export const ListScreen = ({ navigation }) => {
  const toast = useToast();
  const { restaurants, setRestaurants, storeRestaurantsAsync } =
    useRestaurantContext();

  useEffect(() => {
    const backAction = () => {
      Alert.alert("Hold on!", "Are you sure you want to go back?", [
        {
          text: "Cancel",
          onPress: () => null,
          style: "cancel",
        },
        { text: "YES", onPress: () => BackHandler.exitApp() },
      ]);

      return true;
    };

    const backhandler = BackHandler.addEventListener(
      "hardwareBackPress",
      backAction
    );

    return () => backhandler.remove();
  }, []);

  return (
    <View style={styles.listScreenContainer}>
      <Button
        onPress={() => {
          navigation.navigate("Add Restaurant");
        }}
        size="lg"
        width="100%"
      >
        Add Restaurant
      </Button>
      <FlatList
        style={styles.restaurantList}
        data={restaurants}
        renderItem={({ item }) => (
          <View style={styles.restaurantContainer}>
            <Text style={styles.restaurantName}>{item.name}</Text>
            <Button
              size="lg"
              style={styles.button}
              onPress={() => {
                Alert.alert(
                  "Please confirm",
                  "Are you sure you want to delete this restaurant?",
                  [
                    {
                      text: "Yes",
                      onPress: () => {
                        let filteredList = restaurants.filter(
                          (r) => r.key !== item.key
                        );
                        setRestaurants(filteredList);
                        toast.show({
                          title: `${item.name} deleted`,
                        });
                        storeRestaurantsAsync(filteredList);
                      },
                    },
                    { text: "No" },
                    { text: "Cancel", style: "cancel" },
                  ],
                  { cancelable: true }
                );
              }}
            >
              Delete
            </Button>
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  listScreenContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 10,
    ...Platform.select({
      ios: {},
      android: {},
    }),
  },
  restaurantList: { width: "100%" },
  restaurantContainer: {
    flexDirection: "row",
    marginTop: 4,
    marginBottom: 4,
    borderColor: "#e0e0e0",
    borderBottomWidth: 2,
    alignItems: "center",
  },
  restaurantName: { flex: 1 },
  button: {
    marginTop: 5,
    marginBottom: 10,
  },
});
