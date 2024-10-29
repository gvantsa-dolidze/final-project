import { configureStore } from '@reduxjs/toolkit'
import counterReducer from './app/counterSlice'
import ProductsReducer from "../store/app/ProductSlice"

import BestSellingProductsReducer from "./app/BestSellingProductsReducer"
import FeaturedProductsReducer from './app/FeaturedProductsReducer'
import LatestProductsReducer from './app/LatestProductsReducer'

const store = configureStore({
  reducer: {
    counter: counterReducer,
    products: ProductsReducer,
    bestSellingProducts: BestSellingProductsReducer,
    featuredProduct: FeaturedProductsReducer,
    latestProduct: LatestProductsReducer
  },
})
export default store;

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch