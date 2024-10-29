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

export const getSimilarProducts = createAsyncThunk("similarProduct", async () => {
  //${search}
  return fetch(
    `https://fakestoreapi.com/products/category/women's clothing?limit=4`
  ).then((res) => res.json());
});

const SimilarProductsSlice = createSlice({
  name: "similarProduct",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(getSimilarProducts.pending, (state, action) => {
        state.loading = true;
      })
      .addCase(getSimilarProducts.fulfilled, (state, action) => {
        state.loading = false;
        state.error = null;
        state.data = action.payload;
      })
      .addCase(getSimilarProducts.rejected, (state, action: PayloadAction<any>) => {
        state.loading = false;
        state.error = action.payload;
        state.data = [];
      });
  },
});

export default SimilarProductsSlice.reducer;
