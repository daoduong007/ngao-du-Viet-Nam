import {configureStore} from '@reduxjs/toolkit'
import tourSlide from './reducer/tourSlice';

const store = configureStore({
  reducer: {
    tour: tourSlide,
  }
})
export default store;

export * from "./reducer";
export * from './selectors';