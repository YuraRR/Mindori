import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  certificateAmount: 1000,
  certificatePromoCode: null,
  certificateInputPromoCode: {
    promoCode: null,
    amount: 0,
    isUsed: false,
  },
};

const certificateSlice = createSlice({
  name: "certificate",
  initialState,
  reducers: {
    setCertificateAmount: (state, action) => {
      state.certificateAmount = action.payload;
    },
    setCertificatePromoCode: (state, action) => {
      state.certificatePromoCode = action.payload;
    },
    setCertificateInputPromoCode: (state, action) => {
      state.certificateInputPromoCode = action.payload;
    },
  },
});

export const { setCertificateAmount, setCertificatePromoCode, setCertificateInputPromoCode } =
  certificateSlice.actions;
export default certificateSlice.reducer;
