import { configureStore } from '@reduxjs/toolkit'
import counterReducer from './app/counterSlice'
import ProductReducer from "../store/app/ProductSlice"
import BestSellingProductsSlice from "./app/BestSellingProductsSlice"

import HomePageProductReducer from '../store/app/HomePageProductSlice'

const store = configureStore({
  reducer: {
    counter: counterReducer,
    product: ProductReducer,
    bestSellingProducts: BestSellingProductsSlice.reducer,
    homePageProduct: HomePageProductReducer
  },
})
export default store;

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch