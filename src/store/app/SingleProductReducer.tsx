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

export const getSingleProduct = createAsyncThunk("SingleProduct", async (id: number) => {
  return fetch(`https://fakestoreapi.com/products/${id}`)
  .then(res => res.json());
});

const SingleProductSlice = createSlice({
  name: "SingleProduct",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
        .addCase(getSingleProduct.pending, (state, action) => {
             state.loading = true;
        })
        .addCase(getSingleProduct.fulfilled,(state, action)=>{
            state.loading = false;
            state.error = null;
            state.data = action.payload
        })
        .addCase(getSingleProduct.rejected, (state, action:PayloadAction<any>)=>{
            state.loading = false;
            state.error = action.payload;
            state.data = []
        })
  },
});

export default SingleProductSlice.reducer;
