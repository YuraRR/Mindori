// src/store.js
import { configureStore } from "@reduxjs/toolkit";
import dataReducer from "../features/dataSlice";
import searchSlice from "../features/searchSlice";
import certificateSlice from "../features/certificateSlice";

const saveToLocalStorage = (state) => {
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem("reduxState", serializedState);
  } catch (e) {
    console.error("Could not save state", e);
  }
};

const loadFromLocalStorage = () => {
  try {
    const serializedState = localStorage.getItem("reduxState");
    if (serializedState === null) return undefined;
    return JSON.parse(serializedState);
  } catch (e) {
    console.error("Could not load state", e);
    return undefined;
  }
};

const persistedState = loadFromLocalStorage();

const store = configureStore({
  reducer: {
    data: dataReducer,
    search: searchSlice,
    certificate: certificateSlice,
  },
  preloadedState: persistedState,
});

store.subscribe(() => {
  saveToLocalStorage(store.getState());
});

export default store;
