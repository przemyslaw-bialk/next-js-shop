import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { CartItem } from "./cartTypes";

type CartState = {
  items: CartItem[];
};

const initialState: CartState = {
  items: [],
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItemToCart: (state, action: PayloadAction<CartItem>) => {
      const existingItem = state.items.find(
        (item) => item.id === action.payload.id,
      );

      if (existingItem) {
        existingItem.quantity = Math.min(
          existingItem.quantity + action.payload.quantity,
          existingItem.stock,
        );
      } else {
        state.items.push(action.payload);
      }
    },
    increaseItemQuantityInCart: (
      state,
      action: PayloadAction<{ id: string }>,
    ) => {
      const item = state.items.find((item) => item.id === action.payload.id);

      if (item && item.quantity < item.stock) {
        item.quantity = item.quantity + 1;
      }
    },
    decreaseItemQuantityInCart: (
      state,
      action: PayloadAction<{ id: string }>,
    ) => {
      const item = state.items.find((item) => item.id === action.payload.id);

      if (item && item.quantity > 1) {
        item.quantity = item.quantity - 1;
      }
    },
    removeItemFromCart: (state, action: PayloadAction<{ id: string }>) => {
      const items = state.items.filter((item) => item.id !== action.payload.id);
      state.items = items;
    },
    clearCart: (state) => {
      state.items = [];
    },
  },
});

export const {
  addItemToCart,
  clearCart,
  increaseItemQuantityInCart,
  decreaseItemQuantityInCart,
  removeItemFromCart,
} = cartSlice.actions;

export default cartSlice.reducer;
