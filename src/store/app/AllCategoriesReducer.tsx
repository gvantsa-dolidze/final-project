import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
// import type { RootState } from '../store';

export interface CategoryState {
      data: [] | null,
      loading: boolean,
      error: string | null
}

const initialState: CategoryState = {
  data : [],
  loading: false,
  error:''
};

export const getAllCategories = createAsyncThunk("allCategories", async () => {
  //${search}
  return fetch(`https://fakestoreapi.com/products/categories/?limit=9`)
  .then(res => res.json());
});

const AllCategoriesSlice = createSlice({
  name: "allCategories",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
        .addCase(getAllCategories.pending, (state, action) => {
             state.loading = true;
        })
        .addCase(getAllCategories.fulfilled,(state, action)=>{
            state.loading = false;
            state.error = null;
            state.data = action.payload
        })
        .addCase(getAllCategories.rejected, (state, action:PayloadAction<any>)=>{
            state.loading = false;
            state.error = action.payload;
            state.data = []
        })
  },
});

export default AllCategoriesSlice.reducer;
