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

export const getLatestProducts = createAsyncThunk("latestProduct", async () => {
  //${search}
  return fetch(
    `https://fakestoreapi.com/products/category/electronics?limit=4`
  ).then((res) => res.json());
});

const LatestProductsSlice = createSlice({
  name: "latestProduct",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(getLatestProducts.pending, (state, action) => {
        state.loading = true;
      })
      .addCase(getLatestProducts.fulfilled, (state, action) => {
        state.loading = false;
        state.error = null;
        state.data = action.payload;
      })
      .addCase(getLatestProducts.rejected, (state, action: PayloadAction<any>) => {
        state.loading = false;
        state.error = action.payload;
        state.data = [];
      });
  },
});

export default LatestProductsSlice.reducer;
