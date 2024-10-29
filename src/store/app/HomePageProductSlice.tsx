import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
// import type { RootState } from '../store';

export interface HomePageProductState {
      data: [] | null,
      loading: boolean,
      error: string | null
}

const initialState: HomePageProductState = {
  data : [],
  loading: false,
  error:''
};

export const getHomePageProducts = createAsyncThunk("product", async (search: any) => {

  return fetch('https://fakestoreapi.com/products?limit=4').then((res) =>
    res.json()
  );
});

export const homePageProductSlice = createSlice({
  name: "product",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
        .addCase(getHomePageProducts.pending, (state, action) => {
             state.loading = true;
        })
        .addCase(getHomePageProducts.fulfilled,(state, action)=>{
            state.loading = false;
            state.error = null;
            state.data = action.payload
        })
        .addCase(getHomePageProducts.rejected, (state, action:PayloadAction<any>)=>{
            state.loading = false;
            state.error = action.payload;
            state.data = []
        })
  },
});

export default homePageProductSlice.reducer;
