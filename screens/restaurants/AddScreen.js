import React, { useState } from "react";
import { View, ScrollView, Text, StyleSheet } from "react-native";
import { Input, Select, CheckIcon, Button } from "native-base";
import { useRestaurantContext } from "../../context/RestaurantContext";

export const AddScreen = ({ navigation }) => {
  const [restaurant, setRestaurant] = useState({
    name: "",
    cuisine: "",
    price: "",
    rating: "",
    phone: "",
    address: "",
    website: "",
    delivery: "",
    key: `r_${new Date().getTime()}`,
  });

  const { restaurants, setRestaurants, storeRestaurantsAsync } =
    useRestaurantContext();

  return (
    <ScrollView style={styles.addScreenContainer}>
      <View style={styles.addScreenInnerContainer}>
        <View style={styles.addScreenFormContainer}>
          {/* ########## Name ########## */}
          <View style={styles.inputContainer}>
            <Text style={styles.fieldLabel}>Name</Text>
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

          {/* ########## Cuisine ########## */}
          <View style={styles.pickerContainer}>
            <Text style={styles.fieldLabel}>Cuisine</Text>
            <Select
              size="2xl"
              accessibilityLabel="Choose Cuisine"
              placeholder="Choose Cuisine"
              _selectedItem={{
                bg: "blue.600",
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
              <Select.Item label="BBQ" value="BBQ" />
              <Select.Item label="Belgian" value="Belgian" />
              <Select.Item label="Brazilian" value="Brazilian" />
              <Select.Item label="British" value="British" />
              <Select.Item label="Cajun" value="Cajun" />
              <Select.Item label="Canadian" value="Canadian" />
              <Select.Item label="Chinese" value="Chinese" />
              <Select.Item label="Cuban" value="Cuban" />
              <Select.Item label="Egyptian" value="Egyptian" />
              <Select.Item label="Filipino" value="Filipino" />
              <Select.Item label="French" value="French" />
              <Select.Item label="German" value="German" />
              <Select.Item label="Greek" value="Greek" />
              <Select.Item label="Haitian" value="Haitian" />
              <Select.Item label="Hawaiian" value="Hawaiian" />
              <Select.Item label="Indian" value="Indian" />
              <Select.Item label="Irish" value="Irish" />
              <Select.Item label="Italian" value="Italian" />
              <Select.Item label="Japanese" value="Japanese" />
              <Select.Item label="Jewish" value="Jewish" />
              <Select.Item label="Kenyan" value="Kenyan" />
              <Select.Item label="Korean" value="Korean" />
              <Select.Item label="Latvian" value="Latvian" />
              <Select.Item label="Libyan" value="Libyan" />
              <Select.Item label="Mediterranean" value="Mediterranean" />
              <Select.Item label="Mexican" value="Mexican" />
              <Select.Item label="Mormon" value="Mormon" />
              <Select.Item label="Nigerian" value="Nigerian" />
              <Select.Item label="Other" value="Other" />
              <Select.Item label="Peruvian" value="Peruvian" />
              <Select.Item label="Polish" value="Polish" />
              <Select.Item label="Portuguese" value="Portuguese" />
              <Select.Item label="Russian" value="Russian" />
              <Select.Item label="Salvadorian" value="Salvadorian" />
              <Select.Item label="Sandwiche Shop" value="Sandwiche Shop" />
              <Select.Item label="Scottish" value="Scottish" />
              <Select.Item label="Seafood" value="Seafood" />
              <Select.Item label="Spanish" value="Spanish" />
              <Select.Item label="Steak House" value="Steak House" />
              <Select.Item label="Sushi" value="Sushi" />
              <Select.Item label="Swedish" value="Swedish" />
              <Select.Item label="Tahitian" value="Tahitian" />
              <Select.Item label="Thai" value="Thai" />
              <Select.Item label="Tibetan" value="Tibetan" />
              <Select.Item label="Turkish" value="Turkish" />
              <Select.Item label="Welsh" value="Welsh" />
            </Select>
          </View>

          {/* ########## Price ########## */}
          <View style={styles.pickerContainer}>
            <Text style={styles.fieldLabel}>Price</Text>
            <Select
              size="2xl"
              accessibilityLabel="Choose Price"
              placeholder="Choose Price"
              _selectedItem={{
                bg: "blue.600",
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
          </View>

          {/* ########## Rating ########## */}
          <View style={styles.pickerContainer}>
            <Text style={styles.fieldLabel}>Rating</Text>
            <Select
              size="2xl"
              accessibilityLabel="Choose Rating"
              placeholder="Choose Rating"
              _selectedItem={{
                bg: "blue.600",
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
              isRequired
            >
              <Select.Item label="1" value="1" />
              <Select.Item label="2" value="2" />
              <Select.Item label="3" value="3" />
              <Select.Item label="4" value="4" />
              <Select.Item label="5" value="5" />
            </Select>
          </View>

          {/* ########## Phone ########## */}
          <View style={styles.inputContainer}>
            <Text style={styles.fieldLabel}>Phone</Text>
            <Input
              value={restaurant.phone}
              w="100%"
              onChangeText={(inItemValue) =>
                setRestaurant({
                  ...restaurant,
                  phone: inItemValue,
                })
              }
              maxLength={20}
              size="2xl"
              placeholder="Phone"
            />
          </View>

          {/* ########## Address ########## */}
          <View style={styles.inputContainer}>
            <Text style={styles.fieldLabel}>Address</Text>
            <Input
              value={restaurant.address}
              w="100%"
              onChangeText={(inItemValue) =>
                setRestaurant({
                  ...restaurant,
                  address: inItemValue,
                })
              }
              maxLength={20}
              size="2xl"
              placeholder="Address"
            />
          </View>

          {/* ######### Web Site ########## */}
          <View style={styles.inputContainer}>
            <Text style={styles.fieldLabel}>Website</Text>
            <Input
              value={restaurant.website}
              w="100%"
              onChangeText={(inItemValue) =>
                setRestaurant({
                  ...restaurant,
                  website: inItemValue,
                })
              }
              size="2xl"
              placeholder="Website"
            />
          </View>

          {/* ########## Delivery ########## */}
          <View style={styles.pickerContainer}>
            <Text style={styles.fieldLabel}>Delivery</Text>
            <Select
              size="2xl"
              accessibilityLabel="Choose Delivery"
              placeholder="Choose Delivery"
              _selectedItem={{
                bg: "blue.600",
                endIcon: <CheckIcon size={5} />,
              }}
              mt="1"
              selectedValue={restaurant.delivery}
              onValueChange={(inItemValue) =>
                setRestaurant({
                  ...restaurant,
                  delivery: inItemValue,
                })
              }
              isRequired
            >
              <Select.Item label="Yes" value="Yes" />
              <Select.Item label="No" value="No" />
            </Select>
          </View>

          {/* ########## Buttons ########## */}
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
  fieldLabel: {
    marginBottom: 5,
  },

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
