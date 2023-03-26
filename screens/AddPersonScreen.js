import React, { useState } from "react";
import { View, Text, ScrollView, StyleSheet } from "react-native";
import { Input, Select, FormControl, CheckIcon } from "native-base";
import { CustomButton } from "../components/CustomButton";
import { usePeopleContext } from "../context/PeopleContext";

export const AddPersonScreen = ({ navigation }) => {
  const [person, setPerson] = useState({
    name: "",
    key: `r_${new Date().getTime()}`,
  });

  const { people, setPeople, storePeopleAsync } = usePeopleContext();

  return (
    <ScrollView style={styles.addScreenContainer}>
      <View style={styles.addScreenInnerContainer}>
        <View style={styles.addScreenFormContainer}>
          <View style={styles.inputContainer}>
            <Input
              value={person.name}
              w="100%"
              onChangeText={(inItemValue) =>
                setPerson({
                  ...person,
                  name: inItemValue,
                })
              }
              size="2xl"
              placeholder="Name"
            />
          </View>

          <View style={styles.addScreenButtonsContainer}>
            <CustomButton
              text="Cancel"
              width="50%"
              onPress={() => {
                navigation.navigate("People List");
              }}
            />
            <CustomButton
              text="Save"
              width="45%"
              onPress={() => {
                let tempPeople = [...people, person];
                setPeople(tempPeople);
                storePeopleAsync(tempPeople);
                navigation.navigate("People List");
              }}
            />
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
});
