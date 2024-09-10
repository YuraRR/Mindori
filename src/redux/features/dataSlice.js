import { createSlice } from "@reduxjs/toolkit";
import extraServicesData from "/src/constants/extraServicesData";

const initialState = {
  startDate: null,
  endDate: null,
  selectedHouse: null,
  guestsAmount: null,
  contactInformation: {},
  selectedServices: extraServicesData.map((service) => ({
    title: service.title,
    quantity: 0,
  })),
};

const dataSlice = createSlice({
  name: "data",
  initialState,
  reducers: {
    setStartDate: (state, action) => {
      state.startDate = action.payload;
    },
    setEndDate: (state, action) => {
      state.endDate = action.payload;
    },
    setSelectedHouse: (state, action) => {
      state.selectedHouse = action.payload;
    },
    setGuestsAmount: (state, action) => {
      state.guestsAmount = action.payload;
    },
    setContactInfo: (state, action) => {
      state.contactInformation = action.payload;
    },
    updateExtraServices: (state, action) => {
      const { title, quantity } = action.payload;
      const item = state.selectedServices.find((item) => item.title === title);
      item && (item.quantity = quantity);
    },
  },
});

export const { setStartDate, setEndDate, setSelectedHouse, setGuestsAmount, setContactInfo, updateExtraServices } =
  dataSlice.actions;
export default dataSlice.reducer;
