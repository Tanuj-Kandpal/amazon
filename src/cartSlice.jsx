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
      state.items.pop(action.payload);
    },
  },
});

export const { addItem, clearCart, removeItem } = cartSlice.actions;

export default cartSlice.reducer;
