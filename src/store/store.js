import { configureStore } from '@reduxjs/toolkit'
import counterReducer from './app/counterSlice'
export default configureStore({
  reducer: {
    counter: counterReducer,
  },
})