import { start } from "@popperjs/core";
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: localStorage.getItem("cart")
    ? JSON.parse(localStorage.getItem("cart"))
    : [],
};

// Here define a slice
const addToCart = createSlice({
  name: "cart",
  initialState,
  reducers: {
    // this is basically a action
    addItem: (state, action) => {
      // console.log(action.payload);
      state.items.push(action.payload);
      // localStorage.setItem("key", value);
      localStorage.setItem("cart", JSON.stringify(state.items));
    },
    removeItem: (state, action) => {
      // state.value > 0 ? (state.value -= 1) : 0;
      const cartData = state.items.filter(
        (item) => item.id != action.payload.id
      );

      localStorage.setItem("cart", JSON.stringify(cartData));
      state.items = cartData;
    },
    clearAllItems: (state) => {
      state.value = 0;
    },
  },
});

export const { addItem, removeItem, clearAllItems } = addToCart.actions;
export default addToCart.reducer;
