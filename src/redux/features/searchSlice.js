import { createSlice } from "@reduxjs/toolkit";
import housesData from "/src/constants/housesData";

const initialState = {
  searchInterval: {},
  availableHouses: housesData,
};

const searchSlice = createSlice({
  name: "search",
  initialState,
  reducers: {
    setSearchInterval: (state, { payload }) => {
      state.searchInterval = payload;
    },
    setAvailableHouses: (state, { payload }) => {
      state.availableHouses = payload;
    },
  },
});

export const { setSearchInterval, setAvailableHouses } = searchSlice.actions;
export default searchSlice.reducer;
