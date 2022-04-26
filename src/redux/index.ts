import {configureStore} from '@reduxjs/toolkit';
import storage from 'redux-persist/lib/storage';
import {combineReducers} from "redux"; 
import { persistReducer } from 'redux-persist';

import tourSlide from './reducer/tourSlice';
import hotelSlice from './reducer/hotelSlice';
import loginSlice from './reducer/loginSlice';
import signUpSlice from './reducer/signUpSlice';
import checkOutSlice from './reducer/checkOutSlice'

const reducers = combineReducers({
  tour: tourSlide,
  hotel: hotelSlice,
  login: loginSlice,
  signUp: signUpSlice,
  checkOut: checkOutSlice
})

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['login']
};

const persistedReducer = persistReducer(persistConfig, reducers);

// const store = configureStore({
//   reducer: {
//     tour: tourSlide,
//     hotel: hotelSlice,
//     login: loginSlice,
//     signUp: signUpSlice,
//     checkOut: checkOutSlice
//   }
// })


const store = configureStore({
  reducer: persistedReducer,
});

export default store;

export * from "./reducer";
export * from './selectors';