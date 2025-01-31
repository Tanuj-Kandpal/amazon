import { createSlice } from "@reduxjs/toolkit";

type Item = {
  index: number;
  name: string; // Example additional property
  quantity: number; // Example additional property
};

type State = {
  items: Item[];
};

type Action = {
  type: string;
  payload: Item;
};

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
  },
  reducers: {
    addItem: function (state: State, action: Action) {
      if (!state.items.some((item) => item.index === action.payload.index)) {
        state.items.push(action.payload);
      }
      // state.items.push(action.payload);
    },
    clearCart: function (state: State) {
      state.items = [];
    },
    removeItem: function (state: State, action: Action) {
      state.items = state.items.filter(
        (item) => item.index !== action.payload // Ensure the correct item is removed
      );
    },
    increaseItemQuantity: function (state: State, action: Action) {
      const item = state.items.find((item) => item.index === action.payload);
      item.quantity++;
    },
    decreaseItemQuantity: function (state: State, action: Action) {
      let item = state.items.find((item) => item.index === action.payload);
      {
        item.quantity < 1 ? "" : item.quantity--;
      }
    },
    subTotal: function (state: State, action: Action) {
      console.log(action.payload);
      const subTotal = action.payload;
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
