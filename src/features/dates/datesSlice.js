// src/features/dates/datesSlice.js
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  startDate: null,
  endDate: null,
};

const datesSlice = createSlice({
  name: "dates",
  initialState,
  reducers: {
    setStartDate: (state, action) => {
      state.startDate = action.payload; // Ожидаем строку
    },
    setEndDate: (state, action) => {
      state.endDate = action.payload; // Ожидаем строку
    },
  },
});

export const { setStartDate, setEndDate } = datesSlice.actions;
export default datesSlice.reducer;
