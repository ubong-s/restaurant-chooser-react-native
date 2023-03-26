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
import { useToast } from "native-base";
import { CustomButton } from "../components/CustomButton";
import { usePeopleContext } from "../context/PeopleContext";

export const PeopleListScreen = ({ navigation }) => {
  const toast = useToast();
  const { people, setPeople, storePeopleAsync } = usePeopleContext();

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
      <CustomButton
        text="Add Person"
        width="100%"
        onPress={() => {
          navigation.navigate("Add Person");
        }}
      />
      <FlatList
        style={styles.peopleList}
        data={people}
        renderItem={({ item }) => (
          <View style={styles.personContainer}>
            <Text style={styles.personName}>{item.name}</Text>
            <CustomButton
              text="Delete"
              onPress={() => {
                Alert.alert(
                  "Please confirm",
                  "Are you sure you want to delete this restaurant?",
                  [
                    {
                      text: "Yes",
                      onPress: () => {
                        let filteredList = people.filter(
                          (r) => r.key !== item.key
                        );
                        setPeople(filteredList);
                        toast.show({
                          title: `${item.name} deleted`,
                        });
                        storePeopleAsync(filteredList);
                      },
                    },
                    { text: "No" },
                    { text: "Cancel", style: "cancel" },
                  ],
                  { cancelable: true }
                );
              }}
            />
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
  peopleList: { width: "100%" },
  personContainer: {
    flexDirection: "row",
    marginTop: 4,
    marginBottom: 4,
    borderColor: "#e0e0e0",
    borderBottomWidth: 2,
    alignItems: "center",
  },
  personName: { flex: 1 },
});
