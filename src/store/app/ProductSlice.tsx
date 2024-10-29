import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
// import type { RootState } from '../store';

export interface ProductState {
      data: [] | null,
      loading: boolean,
      error: string | null
}

const initialState: ProductState = {
  data : [],
  loading: false,
  error:''
};

export const getProducts = createAsyncThunk("product", async (search: any) => {
  //${search}
  return fetch(`https://api.escuelajs.co/api/v1/products?limit=4&offset=0`)
  .then(res => res.json());
});

export const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
        .addCase(getProducts.pending, (state, action) => {
             state.loading = true;
        })
        .addCase(getProducts.fulfilled,(state, action)=>{
            state.loading = false;
            state.error = null;
            state.data = action.payload
        })
        .addCase(getProducts.rejected, (state, action:PayloadAction<any>)=>{
            state.loading = false;
            state.error = action.payload;
            state.data = []
        })
  },
});

export default productSlice.reducer;
