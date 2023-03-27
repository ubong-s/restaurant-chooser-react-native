import { Button, Checkbox } from "native-base";
import { useState } from "react";
import { FlatList, Alert } from "react-native";
import { TouchableOpacity, StyleSheet, View, Text } from "react-native";
import { useDecisionContext } from "../../context/DecisionContext";
import { usePeopleContext } from "../../context/PeopleContext";

export const WhosGoingScreen = ({ navigation }) => {
  const [selected, setSelected] = useState({});
  const { people } = usePeopleContext();
  const { participants, setParticipants } = useDecisionContext();
  // const [filteredRestaurants, setFilteredRestaurants] = useState(null);
  // const [choseRestaurant, setChoseRestaurant] = useState({});

  const selectParticipant = (item) => {
    setParticipants((prev) => {
      const pExists = prev.find((p) => p.key === item.key);

      if (pExists) {
        return prev.filter((p) => p.key !== item.key);
      } else {
        return [...prev, { ...item, vetoed: "no" }];
      }
    });
  };

  return (
    <View style={styles.listScreenContainer}>
      <FlatList
        style={{ width: "100%" }}
        data={people}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={styles.whosGoingItemTouchable}
            onPress={() => {
              selectParticipant(item);
            }}
          >
            <TouchableOpacity
              style={[
                styles.whosGoingCheckbox,
                {
                  backgroundColor: participants.find((p) => p.key === item.key)
                    ? "blue"
                    : null,
                },
              ]}
              onPress={() => {
                selectParticipant(item);
              }}
              accessibilityLabel={`checkbox ${item.name}`}
            />
            <Text style={styles.whosGoingName}>
              {item.name} ({item.relationship})
            </Text>
          </TouchableOpacity>
        )}
      />

      {/* ########## Next Step button ########## */}
      <Button
        width="100%"
        onPress={() => {
          if (participants.length === 0) {
            Alert.alert(
              "Uhh, you awake?",
              "You didn't select anyone to go. Wanna give it another try?",
              [{ text: "OK" }],
              { cancelable: false }
            );
          } else {
            navigation.navigate("PreFilters");
          }
        }}
      >
        Next
      </Button>
    </View>
  );
};

const styles = StyleSheet.create({
  listScreenContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 10,
  },

  whosGoingHeadline: {
    fontSize: 30,
    marginTop: 20,
    marginBottom: 20,
  },

  whosGoingItemTouchable: {
    flexDirection: "row",
    marginTop: 10,
    marginBottom: 10,
  },

  whosGoingCheckbox: {
    width: 20,
    height: 20,
    marginRight: 20,
    borderColor: "blue",
    borderWidth: 2,
  },

  whosGoingName: {
    flex: 1,
  },
});
