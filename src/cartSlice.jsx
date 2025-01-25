import { createSlice } from "@reduxjs/toolkit";
const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
  },
  reducers: {
    addItem: function (state, action) {
      if (!state.items.some((item) => item.index === action.payload.index)) {
        state.items.push(action.payload);
      }
      // state.items.push(action.payload);
    },
    clearCart: function (state) {
      state.items = [];
    },
    removeItem: function (state, action) {
      state.items = state.items.filter(
        (item) => item.index !== action.payload // Ensure the correct item is removed
      );
    },
    increaseItemQuantity: function (state, action) {
      let item = state.items.find((item) => item.index === action.payload);
      item.quantity++;
    },
    decreaseItemQuantity: function (state, action) {
      let item = state.items.find((item) => item.index === action.payload);
      {
        item.quantity < 1 ? "" : item.quantity--;
      }
    },
  },
});

export const {
  addItem,
  clearCart,
  removeItem,
  increaseItemQuantity,
  decreaseItemQuantity,
} = cartSlice.actions;

export default cartSlice.reducer;
