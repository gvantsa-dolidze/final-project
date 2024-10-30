import { configureStore } from '@reduxjs/toolkit'
import counterReducer from './app/counterSlice'
import AllProductsReducer from "./app/AllProductsReducer"

import BestSellingProductsReducer from "./app/BestSellingProductsReducer"
import FeaturedProductsReducer from './app/FeaturedProductsReducer'
import LatestProductsReducer from './app/LatestProductsReducer'
import SimilarProductsReducer from './app/SimilarProductsReducer'
import SingleProductReducer  from './app/SingleProductReducer'

const store = configureStore({
  reducer: {
    counter: counterReducer,
    allProduct: AllProductsReducer,
    bestSellingProducts: BestSellingProductsReducer,
    featuredProduct: FeaturedProductsReducer,
    latestProduct: LatestProductsReducer,
    similarProduct: SimilarProductsReducer,
    singleProduct: SingleProductReducer
  },
})
export default store;

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch