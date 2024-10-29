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

export const getBestSellingProducts = createAsyncThunk("product2", async () => {
  //${search}
  return fetch(
    `https://fakestoreapi.com/products?limit=4`
  ).then((res) => res.json());
});

const BestSellingProductsSlice = createSlice({
  name: "product2",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(getBestSellingProducts.pending, (state, action) => {
        state.loading = true;
      })
      .addCase(getBestSellingProducts.fulfilled, (state, action) => {
        state.loading = false;
        state.error = null;
        state.data = action.payload;
      })
      .addCase(getBestSellingProducts.rejected, (state, action: PayloadAction<any>) => {
        state.loading = false;
        state.error = action.payload;
        state.data = [];
      });
  },
});

export default BestSellingProductsSlice.reducer;
