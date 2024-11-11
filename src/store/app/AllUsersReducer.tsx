import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
// import type { RootState } from '../store';

export interface UserState {
      data: [] | null,
      loading: boolean,
      error: string | null
}

const initialState: UserState = {
  data : [],
  loading: false,
  error:''
};

export const getAllUsers = createAsyncThunk("allUsers", async () => {
  //${search}
  return fetch(`https://fakestoreapi.com/users/?limit=9`)
  .then(res => res.json());
});

const AllUsersSlice = createSlice({
  name: "allUsers",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
        .addCase(getAllUsers.pending, (state, action) => {
             state.loading = true;
        })
        .addCase(getAllUsers.fulfilled,(state, action)=>{
            state.loading = false;
            state.error = null;
            state.data = action.payload
        })
        .addCase(getAllUsers.rejected, (state, action:PayloadAction<any>)=>{
            state.loading = false;
            state.error = action.payload;
            state.data = []
        })
  },
});

export default AllUsersSlice.reducer;
