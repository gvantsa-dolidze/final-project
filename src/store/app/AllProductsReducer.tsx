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

export const getAllProducts = createAsyncThunk("allProduct", async () => {
  //${search}
  return fetch(`https://fakestoreapi.com/products/?limit=9`)
  .then(res => res.json());
});

const AllProductsSlice = createSlice({
  name: "allProduct",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
        .addCase(getAllProducts.pending, (state, action) => {
             state.loading = true;
        })
        .addCase(getAllProducts.fulfilled,(state, action)=>{
            state.loading = false;
            state.error = null;
            state.data = action.payload
        })
        .addCase(getAllProducts.rejected, (state, action:PayloadAction<any>)=>{
            state.loading = false;
            state.error = action.payload;
            state.data = []
        })
  },
});

export default AllProductsSlice.reducer;
