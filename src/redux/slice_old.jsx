import { start } from "@popperjs/core";
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: 0,
};

// Here define a slice
const addToCart = createSlice({
  name: "cart",
  initialState,
  reducers: {
    // this is basically a action
    addItem: (state) => {
      state.value += 1;
    },
    removeItem: (state) => {
      state.value > 0 ? (state.value -= 1) : 0;
    },
    clearAllItems: (state) => {
      state.value = 0;
    },
  },
});

export const { addItem, removeItem, clearAllItems } = addToCart.actions;
export default addToCart.reducer;
