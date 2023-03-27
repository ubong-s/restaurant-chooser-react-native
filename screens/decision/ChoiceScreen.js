import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { Button } from "native-base";
import { useDecisionContext } from "../../context/DecisionContext";
import { Modal } from "react-native";
import { ScrollView } from "react-native";
import { FlatList } from "react-native";
import { getRandom } from "../../utils";

export const ChoiceScreen = ({ navigation }) => {
  const {
    choiceState,
    setChoiceState,
    participants,
    setParticipants,
    filteredRestaurants,
    setFilteredRestaurants,
    setChosenRestaurant,
  } = useDecisionContext();

  const [selectedRestaurant, setSelectedRestaurant] = useState({});

  let vetoStillAvailable =
    participants.filter((p) => p.vetoed === "no").length > 0;

  useEffect(() => {
    setChoiceState({
      ...choiceState,
      vetoText: vetoStillAvailable ? "Veto" : "No Vetoes Left",
      vetoDisabled: !vetoStillAvailable,
    });
  }, [vetoStillAvailable]);

  return (
    <View style={styles.listScreenContainer}>
      {/* ########## Selected Modal ########## */}
      <Modal
        presentationStyle={"formSheet"}
        visible={choiceState.selectedVisible}
        animationType={"slide"}
        onRequestClose={() => {}}
      >
        <View style={styles.selectedContainer}>
          <View style={styles.selectedInnerContainer}>
            <Text style={styles.selectedName}>{selectedRestaurant.name}</Text>
            <View style={styles.selectedDetails}>
              <Text style={styles.selectedDetailsLine}>
                This is a {"\u2605".repeat(selectedRestaurant.rating)} star
              </Text>
              <Text style={styles.selectedDetailsLine}>
                {selectedRestaurant.cuisine} restaurant
              </Text>
              <Text style={styles.selectedDetailsLine}>
                with a price rating of {"$".repeat(selectedRestaurant.price)}
              </Text>
              <Text style={styles.selectedDetailsLine}>
                that{" "}
                {selectedRestaurant.delivery === "Yes" ? "DOES" : "DOES NOT"}{" "}
                deliver.
              </Text>
            </View>
            <View style={styles.buttonsWrap}>
              <Button
                width="40%"
                onPress={() => {
                  setChoiceState({
                    ...choiceState,
                    selectedVisible: false,
                    vetoVisible: false,
                  });
                  setChosenRestaurant(selectedRestaurant);
                  navigation.navigate("Post Choice");
                }}
              >
                Accept
              </Button>
              <Button
                width="40%"
                disabled={choiceState.vetoDisabled}
                onPress={() => {
                  setChoiceState({
                    ...choiceState,
                    selectedVisible: false,
                    vetoVisible: true,
                  });
                }}
              >
                {choiceState.vetoText}
              </Button>
            </View>
          </View>
        </View>
      </Modal>

      {/* ########## Veto Modal ########## */}
      <Modal
        presentationStyle={"formSheet"}
        visible={choiceState.vetoVisible}
        animationType={"slide"}
        onRequestClose={() => {}}
      >
        <View style={styles.vetoContainer}>
          <View style={styles.vetoContainerInner}>
            <Text style={styles.vetoHeadline}>Who's vetoing?</Text>
            <ScrollView style={styles.vetoScrollViewContainer}>
              {participants.map((person) => {
                if (person.vetoed === "no") {
                  return (
                    <TouchableOpacity
                      key={person.key}
                      style={styles.vetoParticipantContainer}
                      onPress={() => {
                        // Mark the vetoer as having vetoed.
                        setParticipants((prev) =>
                          prev.map((participant) => {
                            return participant.key === person.key
                              ? { ...participant, vetoed: "yes" }
                              : participant;
                          })
                        );
                        // Delete the vetoed restaurant.
                        setFilteredRestaurants((prev) =>
                          prev.filter((restaurant) => {
                            if (selectedRestaurant && selectedRestaurant.key) {
                              return restaurant.key !== selectedRestaurant.key;
                            }
                          })
                        );

                        // Update choiceState.
                        setChoiceState({
                          ...choiceState,
                          selectedVisible: false,
                          vetoVisible: false,
                          vetoDisabled: !vetoStillAvailable,
                          // participantsListRefresh:
                          //   !choiceState.participantsListRefresh,
                        });
                        // If there's only one restaurant left then
                        // that's the choice.
                        if (filteredRestaurants.length === 1) {
                          setChosenRestaurant(filteredRestaurants[0]);
                          navigation.navigate("PostChoiceScreen");
                        }
                      }}
                    >
                      <Text style={styles.vetoParticipantName}>
                        {person.name}
                      </Text>
                    </TouchableOpacity>
                  );
                }
              })}
            </ScrollView>
            <View style={styles.vetoButtonContainer}>
              <Button
                width="100%"
                onPress={() => {
                  setChoiceState({
                    ...choiceState,
                    selectedVisible: true,
                    vetoVisible: false,
                  });
                }}
              >
                Never Mind
              </Button>
            </View>
          </View>
        </View>
      </Modal>

      {/* ########## Main choice screen. ########## */}
      <FlatList
        style={styles.choiceScreenListContainer}
        data={participants}
        extraData={choiceState.participantsListRefresh}
        renderItem={({ item }) => (
          <View style={styles.choiceScreenListItem}>
            <Text style={styles.choiceScreenListItemName}>
              {item.name} ({item.relationship && item.relationship})
            </Text>
            <Text>Vetoed: {item.vetoed}</Text>
          </View>
        )}
      />
      <Button
        width="100%"
        onPress={() => {
          // // Randomly pick one.
          const selectedNumber = getRandom(0, filteredRestaurants.length - 1);
          // // Get the restaurant descriptor.
          setSelectedRestaurant(filteredRestaurants[selectedNumber]);
          // // Show the selected modal
          setChoiceState({ ...choiceState, selectedVisible: true });
        }}
      >
        Randomly Choose
      </Button>
    </View>
  );
};

const styles = StyleSheet.create({
  listScreenContainer: {
    padding: 10,
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },

  fieldLabel: {
    marginLeft: 10,
  },

  pickerContainer: {
    ...Platform.select({
      ios: {},
      android: {
        width: "96%",
        borderRadius: 8,
        borderColor: "#c0c0c0",
        borderWidth: 2,
        marginLeft: 10,
        marginBottom: 20,
        marginTop: 4,
      },
    }),
  },

  picker: {
    ...Platform.select({
      ios: {
        width: "96%",
        borderRadius: 8,
        borderColor: "#c0c0c0",
        borderWidth: 2,
        marginLeft: 10,
        marginBottom: 20,
        marginTop: 4,
      },
      android: {},
    }),
  },

  selectedContainer: {
    flex: 1,
    justifyContent: "center",
    padding: 10,
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

  vetoContainer: {
    flex: 1,
    justifyContent: "center",
    padding: 10,
  },

  vetoContainerInner: {
    justifyContent: "center",
    alignItems: "center",
    alignContent: "center",
  },

  vetoHeadlineContainer: {
    paddingBottom: 40,
  },

  vetoHeadline: {
    fontSize: 32,
    fontWeight: "bold",
  },

  vetoScrollViewContainer: {
    height: "50%",
  },

  vetoParticipantContainer: {
    paddingTop: 20,
    paddingBottom: 20,
  },

  vetoParticipantName: {
    fontSize: 24,
  },

  vetoButtonContainer: {
    width: "100%",
    alignItems: "center",
    paddingTop: 40,
  },

  choiceScreenHeadline: {
    fontSize: 30,
    marginTop: 20,
    marginBottom: 20,
  },

  choiceScreenListContainer: {
    width: "94%",
  },

  choiceScreenListItem: {
    flexDirection: "row",
    marginTop: 10,
    marginBottom: 10,
    borderColor: "#e0e0e0",
    borderBottomWidth: 2,
    alignItems: "center",
  },

  choiceScreenListItemName: {
    flex: 1,
  },

  buttonsWrap: {
    flexDirection: "row",
    gap: 20,
  },
});
