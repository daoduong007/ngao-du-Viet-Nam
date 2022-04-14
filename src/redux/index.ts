import {configureStore} from '@reduxjs/toolkit';
import tourSlide from './reducer/tourSlice';
import hotelSlice from './reducer/hotelSlice'

const store = configureStore({
  reducer: {
    tour: tourSlide,
    hotel: hotelSlice,
  }
})
export default store;

export * from "./reducer";
export * from './selectors';