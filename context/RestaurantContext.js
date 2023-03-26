import React, { createContext, useContext, useEffect, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

const RestaurantContext = createContext();

export const RestaurantContextProvider = ({ children }) => {
  const [restaurants, setRestaurants] = useState([]);

  const storeRestaurantsAsync = async (value) => {
    try {
      const jsonValue = JSON.stringify(value);
      await AsyncStorage.setItem("@restaurants", jsonValue);
    } catch (e) {
      console.log(e.message);
    }
  };

  const getRestaurantsAsync = async () => {
    try {
      const jsonValue = await AsyncStorage.getItem("@restaurants");
      return jsonValue != null ? JSON.parse(jsonValue) : [];
    } catch (e) {
      console.log(e.message);
    }
  };

  useEffect(() => {
    getRestaurantsAsync().then((result) => setRestaurants(result));
  }, []);

  return (
    <RestaurantContext.Provider
      value={{
        restaurants,
        setRestaurants,
        storeRestaurantsAsync,
        getRestaurantsAsync,
      }}
    >
      {children}
    </RestaurantContext.Provider>
  );
};

export const useRestaurantContext = () => useContext(RestaurantContext);
