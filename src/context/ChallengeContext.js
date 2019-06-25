import React, { createContext, useReducer, useEffect } from "react";
import axios from "axios";

const reducer = (state, action) => {
  switch (action.type) {
    case "addChallenge":
      return { ...state, challenges: state.challenges.concat(action.data) };
    default:
      return state;
  }
};

// action creators
export const addChallenge = challenge => {
  return {
    type: "addChallenge",
    data: challenge
  };
};

const initialState = {
  challenges: [],
  activities: [],
  performances: [],
  user: {
    id: 1,
    name: "Seppo Sohvaperuna",
    series: "beginners"
  }
};

export const Context = createContext(initialState);

export const Provider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    axios.get("http://localhost:3001/challenges").then(response => {
      dispatch({ type: "addChallenge", data: response.data });
    });
  }, []);

  return (
    <Context.Provider value={{ state, dispatch }}>{children}</Context.Provider>
  );
};
