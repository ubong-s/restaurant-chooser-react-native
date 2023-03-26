import React, { useState } from "react";
import { View, ScrollView, StyleSheet } from "react-native";
import { Input, Select, FormControl, CheckIcon, Button } from "native-base";
import { useRestaurantContext } from "../context/RestaurantContext";

export const AddScreen = ({ navigation }) => {
  const [restaurant, setRestaurant] = useState({
    name: "",
    cuisine: "",
    price: "",
    rating: "",
    phone: "",
    address: "",
    webSite: "",
    delivery: "",
    key: `r_${new Date().getTime()}`,
  });

  const { restaurants, setRestaurants, storeRestaurantsAsync } =
    useRestaurantContext();

  return (
    <ScrollView style={styles.addScreenContainer}>
      <View style={styles.addScreenInnerContainer}>
        <View style={styles.addScreenFormContainer}>
          <View style={styles.inputContainer}>
            <Input
              value={restaurant.name}
              w="100%"
              onChangeText={(inItemValue) =>
                setRestaurant({
                  ...restaurant,
                  name: inItemValue,
                })
              }
              size="2xl"
              placeholder="Name"
            />
          </View>

          <FormControl isRequired isInvalid style={styles.pickerContainer}>
            <FormControl.Label>Cuisine</FormControl.Label>
            <Select
              size="2xl"
              accessibilityLabel="Choose Cuisine"
              placeholder="Choose Cuisine"
              _selectedItem={{
                bg: "teal.600",
                endIcon: <CheckIcon size={5} />,
              }}
              mt="1"
              selectedValue={restaurant.cuisine}
              onValueChange={(inItemValue) =>
                setRestaurant({
                  ...restaurant,
                  cuisine: inItemValue,
                })
              }
            >
              <Select.Item label="Algerian" value="Algerian" />
              <Select.Item label="American" value="American" />

              <Select.Item label="Other" value="Other" />
            </Select>
          </FormControl>

          <FormControl isRequired isInvalid style={styles.pickerContainer}>
            <FormControl.Label>Price</FormControl.Label>
            <Select
              size="2xl"
              accessibilityLabel="Choose Price"
              placeholder="Choose Price"
              _selectedItem={{
                bg: "teal.600",
                endIcon: <CheckIcon size={5} />,
              }}
              mt="1"
              selectedValue={restaurant.price}
              onValueChange={(inItemValue) =>
                setRestaurant({
                  ...restaurant,
                  price: inItemValue,
                })
              }
            >
              <Select.Item label="1" value="1" />
              <Select.Item label="2" value="2" />
              <Select.Item label="3" value="3" />
              <Select.Item label="4" value="4" />
              <Select.Item label="5" value="5" />
            </Select>
          </FormControl>

          <FormControl isRequired isInvalid style={styles.pickerContainer}>
            <FormControl.Label>Rating</FormControl.Label>
            <Select
              size="2xl"
              accessibilityLabel="Choose Rating"
              placeholder="Choose Rating"
              _selectedItem={{
                bg: "teal.600",
                endIcon: <CheckIcon size={5} />,
              }}
              mt="1"
              selectedValue={restaurant.rating}
              onValueChange={(inItemValue) =>
                setRestaurant({
                  ...restaurant,
                  rating: inItemValue,
                })
              }
            >
              <Select.Item label="1" value="1" />
              <Select.Item label="2" value="2" />
              <Select.Item label="3" value="3" />
              <Select.Item label="4" value="4" />
              <Select.Item label="5" value="5" />
            </Select>
          </FormControl>

          <View style={styles.inputContainer}>
            <Input
              value={restaurant.phone}
              w="100%"
              onChangeText={(inItemValue) =>
                setRestaurant({
                  ...restaurant,
                  phone: inItemValue,
                })
              }
              size="2xl"
              placeholder="Phone"
            />
          </View>
          <View style={styles.addScreenButtonsContainer}>
            <Button
              size="lg"
              style={styles.button}
              onPress={() => {
                navigation.navigate("Restaurant List");
              }}
            >
              Cancel
            </Button>
            <Button
              size="lg"
              style={styles.button}
              onPress={() => {
                let tempRestaurants = [...restaurants, restaurant];
                setRestaurants(tempRestaurants);
                storeRestaurantsAsync(tempRestaurants);
                navigation.navigate("Restaurant List");
              }}
            >
              Save
            </Button>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  addScreenContainer: {},
  addScreenInnerContainer: {
    flex: 1,
    alignItems: "center",
    padding: 10,
    width: "100%",
  },
  addScreenFormContainer: { width: "100%" },

  inputContainer: {
    paddingTop: 20,
  },
  pickerContainer: {
    paddingTop: 10,
  },
  addScreenButtonsContainer: {
    flexDirection: "row",
    gap: 20,
    paddingTop: 20,
  },
  button: {
    flexDirection: "row",
    flex: 1,
  },
});
