import { configureStore } from "@reduxjs/toolkit";
import datesReducer from "../features/dates/datesSlice";

const store = configureStore({
  reducer: {
    dates: datesReducer,
  },
});

export default store;
