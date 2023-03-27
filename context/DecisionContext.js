import React, { createContext, useContext, useEffect, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

const DecisionContext = createContext();

export const DecisionContextProvider = ({ children }) => {
  const [participants, setParticipants] = useState([]);
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);
  const [chosenRestaurant, setChosenRestaurant] = useState({});
  const [choiceState, setChoiceState] = useState({
    vetoDisabled: false,
    vetoVisible: false,
    selectedVisible: false,
    participantsListRefresh: false,
    vetoText: "Veto",
  });

  const resetChoiceState = () => {
    setParticipants([]);
    setChoiceState({
      vetoDisabled: false,
      vetoVisible: false,
      selectedVisible: false,
      participantsListRefresh: false,
      vetoText: "Veto",
    });
  };

  return (
    <DecisionContext.Provider
      value={{
        choiceState,
        setChoiceState,
        participants,
        setParticipants,
        filteredRestaurants,
        setFilteredRestaurants,
        chosenRestaurant,
        setChosenRestaurant,
        resetChoiceState,
      }}
    >
      {children}
    </DecisionContext.Provider>
  );
};

export const useDecisionContext = () => useContext(DecisionContext);
