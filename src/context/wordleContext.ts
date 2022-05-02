import * as React from "react";

const initialState = {
  word: "",
};

export const WordleContext = React.createContext(initialState);
