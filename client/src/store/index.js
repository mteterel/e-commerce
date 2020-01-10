import { configureStore, createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: [],
  reducers: {}
});

const userSlice = createSlice({
  name: "user",
  initialState: { loggedIn: false },
  reducers: {}
});

const store = configureStore({
  devTools: true,
  reducer: {
    cart: cartSlice.reducer,
    user: userSlice.reducer
  }
});

export default store;
