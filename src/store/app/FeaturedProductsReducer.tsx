import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";

interface ProductState {
  data: [] | null;
  loading: boolean;
  error: string | null;
}

const initialState: ProductState = {
  data: [],
  loading: false,
  error: "",
};

export const getFeaturedProducts = createAsyncThunk("featuredProduct", async () => {
  //${search}
  return fetch(
    `https://fakestoreapi.com/products/category/jewelery?limit=4`
  ).then((res) => res.json());
});

const FeaturedProductsSlice = createSlice({
  name: "featuredProduct",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(getFeaturedProducts.pending, (state, action) => {
        state.loading = true;
      })
      .addCase(getFeaturedProducts.fulfilled, (state, action) => {
        state.loading = false;
        state.error = null;
        state.data = action.payload;
      })
      .addCase(getFeaturedProducts.rejected, (state, action: PayloadAction<any>) => {
        state.loading = false;
        state.error = action.payload;
        state.data = [];
      });
  },
});

export default FeaturedProductsSlice.reducer;
