import {configureStore} from '@reduxjs/toolkit';
import tourSlide from './reducer/tourSlice';
import hotelSlice from './reducer/hotelSlice';
import loginSlice from './reducer/loginSlice';
import signUpSlice from './reducer/signUpSlice';

const store = configureStore({
  reducer: {
    tour: tourSlide,
    hotel: hotelSlice,
    login: loginSlice,
    signUp: signUpSlice
  }
})
export default store;

export * from "./reducer";
export * from './selectors';