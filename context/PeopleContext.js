import React, { createContext, useContext, useEffect, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

const PeopleContext = createContext();

export const PeopleContextProvider = ({ children }) => {
  const [people, setPeople] = useState([]);

  const storePeopleAsync = async (value) => {
    try {
      const jsonValue = JSON.stringify(value);
      await AsyncStorage.setItem("@people", jsonValue);
    } catch (e) {
      console.log(e.message);
    }
  };

  const getPeopleAsync = async () => {
    try {
      const jsonValue = await AsyncStorage.getItem("@people");
      return jsonValue != null ? JSON.parse(jsonValue) : [];
    } catch (e) {
      console.log(e.message);
    }
  };

  useEffect(() => {
    getPeopleAsync().then((result) => setPeople(result));
  }, []);

  return (
    <PeopleContext.Provider
      value={{
        people,
        setPeople,
        storePeopleAsync,
        getPeopleAsync,
      }}
    >
      {children}
    </PeopleContext.Provider>
  );
};

export const usePeopleContext = () => useContext(PeopleContext);
