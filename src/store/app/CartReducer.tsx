import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface CartState {
  data: any[];
  loading: boolean;
  error: string | null;
}

const initialState: CartState = {
  data: [],
  loading: false,
  error: null,
};

export interface CartItem {
  id: number,
  quantity: number
}

export const getCart = createAsyncThunk(
  "cart/getCart",

  async (_, { getState, dispatch }) => {
    // Gets the current Redux state
    const currentState: any = getState();
    // You can access specific parts of the state like this
    if (currentState.cart.data.length > 0) {
      throw new Error("ragat gvinda meored chatvirtva");
    }

    try {
      const products_res = await fetch("https://fakestoreapi.com/products");
      const products_data = await products_res.json();

      const cart_res = await fetch(`https://fakestoreapi.com/carts/2`);
      const cart_data = await cart_res.json();

      // Combine cart items with corresponding product details
      const cart_with_details = cart_data.products
        .map((cartItem: any) => {
          const product = products_data.find(
            (product: any) => product.id === cartItem.productId
          );
          return product ? { ...product, quantity: cartItem.quantity } : null;
        })
        .filter(Boolean); // Filter out any null values

      return cart_with_details;
    } catch (error) {}
  }
);

const CartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    // Action to add an item to the cart
    addItemToCart(state: any, action: PayloadAction<CartItem>) {
      const item = action.payload;

      // Check if the item already exists in the cart
      const existingItemIndex = state.data.findIndex(
        (cartItem: any) => cartItem.id === item.id
      );

      if (existingItemIndex >= 0) {
        // If the item exists, increment the quantity
        state.data[existingItemIndex].quantity += item.quantity;
      } else {
        // If the item doesn't exist, add it to the cart
        state.data.push(item);
      }
    },

    // Action to remove an item from the cart
    removeItemFromCart(state: any, action: PayloadAction<CartItem>) {
      const itemToDelete = action.payload;

      // Remove the item from the cart by filtering out the item with the provided ID
      // state.data = state.data.filter((item: any) => item.id !== itemToDelete.id);

      state.data = state.data
      .map(
        (item: any) => {
          if (item.id === itemToDelete.id) {
            item.quantity -= itemToDelete.quantity;
          }
          return item;
        }
      )
      .filter((item: any) => item.quantity > 0);
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getCart.pending, (state) => {
        state.loading = true;
      })
      .addCase(getCart.fulfilled, (state, action: PayloadAction<any[]>) => {
        state.loading = false;
        state.error = null;
        state.data = action.payload;
      })
      .addCase(getCart.rejected, (state, action: PayloadAction<any>) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export const { addItemToCart, removeItemFromCart } = CartSlice.actions;

export default CartSlice.reducer;
