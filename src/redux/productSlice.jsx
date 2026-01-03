import React from "react";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

// createAsyncThunk("prefix", async () => {});
// Full Description About createAsyncThunk Middleware
// createAsyncThunk(typePrefix: string, payloadCreator: AsyncThunkPayloadCreator<any, void, AsyncThunkConfig>, options?: AsyncThunkOptions<void, AsyncThunkConfig> | undefined): AsyncThunk<any, void, AsyncThunkConfig>

// Calling API With IN Asysn Funcation using createAsyncThunk Middleware
export const featchProducts = createAsyncThunk("products", async () => {
  const res = await fetch("https://dummyjson.com/products");
  const jsonRes = await res.json();
  return jsonRes.products;
});

// Initialize initial values

const initialState = {
  items: [],
  status: undefined,
  error: null,
};

// Now Createing a Slice

// extraReducers it usefull at that time when api ko  diractily call krte hai from UI Parts

const productSlice = createSlice({
  name: "productSlice",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(featchProducts.fulfilled, (state, action) => {
      state.status = "successed";
      state.items = action.payload;
    });
  },
});

export default productSlice.reducer;

// export default function productSlice() {
//   return <div>productSlice</div>;
// }
