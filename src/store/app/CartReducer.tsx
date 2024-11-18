import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface CartState {
  data: any[] | null; 
  loading: boolean;
  error: string | null;
}

const initialState: CartState = {
  data: [],
  loading: false,
  error: null,
};

export const getCart = createAsyncThunk(
  "cart/getCart",
  async () => {
    try {
      const products_res = await fetch("https://fakestoreapi.com/products");
      const products_data = await products_res.json();

      const cart_res = await fetch(`https://fakestoreapi.com/carts/2`);
      const cart_data = await cart_res.json();

      // Combine cart items with corresponding product details
      const cart_with_details = cart_data.products.map((cartItem: any) => {
        const product = products_data.find(
          (product: any) => product.id === cartItem.productId
        );
        return product ? { ...product, quantity: cartItem.quantity } : null;
      }).filter(Boolean); // Filter out any null values

      return cart_with_details;
    } catch (error) {}
  }
);

const CartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {},
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
        state.data = []; 
      });
  },
});

export default CartSlice.reducer;
