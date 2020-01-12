import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./cart";
import userSlice from "./user";

const store = configureStore({
  devTools: true,
  reducer: { cart: cartSlice.reducer, user: userSlice.reducer }
});

export default store;
