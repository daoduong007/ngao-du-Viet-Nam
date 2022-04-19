import {configureStore} from '@reduxjs/toolkit';
import tourSlide from './reducer/tourSlice';
import hotelSlice from './reducer/hotelSlice';
import loginSlice from './reducer/loginSlice';
import signUpSlice from './reducer/signUpSlice';
import checkOutSlice from './reducer/checkOutSlice'

const store = configureStore({
  reducer: {
    tour: tourSlide,
    hotel: hotelSlice,
    login: loginSlice,
    signUp: signUpSlice,
    checkOut: checkOutSlice
  }
})
export default store;

export * from "./reducer";
export * from './selectors';