import { createSelector, createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: [],
  reducers: {
    addItem: (state, { payload }) => {
      if (!state.some(v => v.productInfo.id === payload.id))
        state.push({
          productInfo: payload,
          quantity: 1
        });

      localStorage.setItem("cartProducts", JSON.stringify(state));
      return state;
    },
    removeItem: (state, { payload }) => {
      const newState = state.filter(
        v => v.productInfo.id !== payload.productId
      );
      localStorage.setItem("cartProducts", JSON.stringify(newState));
      return newState;
    },
    updateQuantity: (state, { payload }) => {
      let newState = state;

      if (payload.quantity <= 0)
        newState = state.filter(v => v.productInfo.id !== payload.productId);
      else
        newState.find(v => v.productInfo.id === payload.productId).quantity =
          payload.quantity;

      localStorage.setItem("cartProducts", JSON.stringify(newState));
      return newState;
    },
    importCart: (state, { payload }) => {
      if (false === Array.isArray(JSON.parse(payload))) return [];

      state.length = 0;
      return JSON.parse(payload);
    }
  }
});

export const getCartItems = state => state.cart;
export const getTotalPrice = createSelector(getCartItems, items =>
  items
    .reduce(
      (acc, v) =>
        Math.round((acc + v.productInfo.price * v.quantity) * 100) / 100,
      0
    )
    .toFixed(2)
);

export const {
  addItem,
  removeItem,
  updateQuantity,
  importCart
} = cartSlice.actions;
export default cartSlice;
