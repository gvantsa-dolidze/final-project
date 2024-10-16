import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import type { RootState } from '../store';

// Define a type for the slice state
interface CartItem {
  quantity: number;
}

interface CounterState {
  items: Record<string, CartItem>; // Object mapping item IDs to quantities
}

// Define the initial state using that type
const initialState: CounterState = {
  items: {},
};

export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increment: (state, action: PayloadAction<string>) => {
      const itemId = action.payload;
      if (!state.items[itemId]) {
        state.items[itemId] = { quantity: 0 };
      }
      state.items[itemId].quantity += 1;
    },
    decrement: (state, action: PayloadAction<string>) => {
      const itemId = action.payload;
      if (state.items[itemId] && state.items[itemId].quantity > 0) {
        state.items[itemId].quantity -= 1;
      }
    },
    incrementByAmount: (state, action: PayloadAction<{ itemId: string; amount: number }>) => {
      const { itemId, amount } = action.payload;
      if (!state.items[itemId]) {
        state.items[itemId] = { quantity: 0 };
      }
      state.items[itemId].quantity += amount;
    },
  },
});

export const { increment, decrement, incrementByAmount } = counterSlice.actions;

// Selector to get the quantity of a specific item
export const selectItemQuantity = (state: RootState, itemId: string) =>
  state.counter.items[itemId]?.quantity || 0;

export default counterSlice.reducer;
