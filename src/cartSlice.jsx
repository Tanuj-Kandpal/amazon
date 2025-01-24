import { createSlice } from "@reduxjs/toolkit";
const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
  },
  reducers: {
    addItem: function (state, action) {
      state.items.push(action.payload);
    },
    clearCart: function (state) {
      state.items = [];
    },
    removeItem: function (state, action) {
      state.items = state.items.filter(
        (item) => item.image !== action.payload // Ensure the correct item is removed
      );
    },
  },
});

export const { addItem, clearCart, removeItem } = cartSlice.actions;

export default cartSlice.reducer;
