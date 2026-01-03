import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./slice";
import productreducer from "./productSlice";

const store = configureStore({
  reducer: {
    cart: cartReducer,
    products: productreducer,
  },
});

export default store;
