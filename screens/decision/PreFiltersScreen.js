import { Button, CheckIcon, Select } from "native-base";
import React, { useState, useEffect } from "react";
import { Alert, ScrollView, StyleSheet, Text, View } from "react-native";
import { useDecisionContext } from "../../context/DecisionContext";
import { useRestaurantContext } from "../../context/RestaurantContext";

export const PreFiltersScreen = ({ navigation }) => {
  const [filters, setFilters] = useState({
    cuisine: "",
    price: "",
    rating: "",
    delivery: "",
  });

  const { restaurants } = useRestaurantContext();
  const { filteredRestaurants, setFilteredRestaurants } = useDecisionContext();

  const filterRestaurants = () => {
    let tempRestaurants = [...restaurants];

    if (filters.cuisine) {
      tempRestaurants = tempRestaurants.filter(
        (restaurant) => restaurant.cuisine === filters.cuisine
      );
    }

    if (filters.price) {
      tempRestaurants = tempRestaurants.filter(
        (restaurant) => restaurant.price <= filters.price
      );
    }

    if (filters.rating) {
      tempRestaurants = tempRestaurants.filter(
        (restaurant) => restaurant.rating >= filters.rating
      );
    }

    if (filters.delivery) {
      tempRestaurants = tempRestaurants.filter(
        (restaurant) => restaurant.delivery === filters.delivery
      );
    }

    setFilteredRestaurants(tempRestaurants);
  };

  useEffect(() => {
    filterRestaurants();
  }, [filters]);

  return (
    <ScrollView style={styles.preFiltersContainer}>
      <View style={styles.preFiltersInnerContainer}>
        <View style={styles.preFiltersScreenFormContainer}>
          {/* ########## Cuisine ########## */}
          <Text style={styles.fieldLabel}>Cuisine</Text>
          <View style={styles.pickerContainer}>
            <Select
              style={styles.picker}
              selectedValue={filters.cuisine}
              accessibilityLabel="Choose Cuisine"
              placeholder="Choose Cuisine"
              _selectedItem={{
                bg: "teal.600",
                endIcon: <CheckIcon size="5" />,
              }}
              onValueChange={(inItemValue) =>
                setFilters({ ...filters, cuisine: inItemValue })
              }
              size="2xl"
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
          <Text style={styles.fieldLabel}>Price &lt;=</Text>
          <View style={styles.pickerContainer}>
            <Select
              style={styles.picker}
              selectedValue={filters.price}
              accessibilityLabel="Choose Price"
              placeholder="Choose Price"
              _selectedItem={{
                bg: "teal.600",
                endIcon: <CheckIcon size="5" />,
              }}
              onValueChange={(inItemValue) =>
                setFilters({ ...filters, price: inItemValue })
              }
              size="2xl"
            >
              <Select.Item label="1" value="1" />
              <Select.Item label="2" value="2" />
              <Select.Item label="3" value="3" />
              <Select.Item label="4" value="4" />
              <Select.Item label="5" value="5" />
            </Select>
          </View>

          {/* ########## Rating ########## */}
          <Text style={styles.fieldLabel}>Rating &gt;=</Text>
          <View style={styles.pickerContainer}>
            <Select
              style={styles.picker}
              selectedValue={filters.rating}
              accessibilityLabel="Choose Rating"
              placeholder="Choose Rating"
              _selectedItem={{
                bg: "teal.600",
                endIcon: <CheckIcon size="5" />,
              }}
              onValueChange={(inItemValue) =>
                setFilters({ ...filters, rating: inItemValue })
              }
              size="2xl"
            >
              <Select.Item label="1" value="1" />
              <Select.Item label="2" value="2" />
              <Select.Item label="3" value="3" />
              <Select.Item label="4" value="4" />
              <Select.Item label="5" value="5" />
            </Select>
          </View>

          {/* ########## Delivery ########## */}
          <Text style={styles.fieldLabel}>Delivery?</Text>
          <View style={styles.pickerContainer}>
            <Select
              style={styles.picker}
              selectedValue={filters.delivery}
              accessibilityLabel="Choose Delivery"
              placeholder="Choose Delivery"
              _selectedItem={{
                bg: "teal.600",
                endIcon: <CheckIcon size="5" />,
              }}
              onValueChange={(inItemValue) =>
                setFilters({ ...filters, delivery: inItemValue })
              }
              size="2xl"
            >
              <Select.Item label="Yes" value="Yes" />
              <Select.Item label="No" value="No" />
            </Select>
          </View>

          {/* ########## Next Step button ########## */}
          <Button
            width="100%"
            onPress={() => {
              if (filteredRestaurants.length === 0) {
                Alert.alert(
                  "Well, that's an easy choice",
                  "None of your restaurants match these criteria. Maybe " +
                    "try loosening them up a bit?",
                  [{ text: "OK" }],
                  { cancelable: false }
                );
              } else {
                navigation.navigate("Choice");
                // We've got at least one, go to the next screen.
              }
            }}
          >
            Next
          </Button>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  preFiltersContainer: {},

  preFiltersInnerContainer: {
    flex: 1,
    alignItems: "center",
    paddingTop: 20,
    width: "100%",
  },

  preFiltersScreenFormContainer: {
    width: "96%",
  },

  fieldLabel: {
    marginBottom: 5,
  },

  pickerContainer: {
    marginBottom: 15,
  },

  picker: {},

  selectedContainer: {
    flex: 1,
    justifyContent: "center",
  },

  selectedInnerContainer: {
    alignItems: "center",
  },

  selectedName: {
    fontSize: 32,
  },

  selectedDetails: {
    paddingTop: 80,
    paddingBottom: 80,
    alignItems: "center",
  },

  selectedDetailsLine: {
    fontSize: 18,
  },
});
