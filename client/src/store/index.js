import { configureStore, createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: [],
  reducers: {}
});

const store = configureStore({
  devTools: true,
  reducer: {
    cart: cartSlice.reducer
  }
});

export default store;
