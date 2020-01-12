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
    },
    removeItem: (state, { payload }) => {
      return state.filter(v => v.productInfo.id !== payload.productId);
    },
    updateQuantity: (state, { payload }) => {
      if (payload.quantity <= 0)
        return state.filter(v => v.productInfo.id !== payload.productId);

      state.find(v => v.productInfo.id === payload.productId).quantity =
        payload.quantity;
    }
  }
});

export const getCartItems = state => state.cart;
export const getTotalPrice = createSelector(getCartItems, items =>
  items.reduce(
    (acc, v) =>
      Math.round((acc + v.productInfo.price * v.quantity) * 100) / 100,
    0
  )
);

export const { addItem, removeItem, updateQuantity } = cartSlice.actions;
export default cartSlice;
