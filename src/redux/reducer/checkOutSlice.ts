import {createSlice } from '@reduxjs/toolkit';

interface ILoginState {
  adults: number;
  children: number;
  timeMoment?: [any, any];
  time: [any, any];
  timeString: [any, any];
  standardRoom?: number;
  familySuite?: number;
  breakfast?: number;
  extraBed?: number;
  totalMoney?: number;
}

const initialState : ILoginState = {
  adults: 0,
  children: 0,
  time:['', ''],
  timeString: ['', ''],
  standardRoom: 0,
  familySuite: 0,
  breakfast: 0,
  extraBed: 0, 
  totalMoney: 0,
}

const checkOutSlice = createSlice({
  name: 'checkOut',
  initialState,
  reducers: {
    bookingTourInfo: (state,action) => {
      state.adults = action.payload.adults;
      state.children = action.payload.children;
      state.time = action.payload.time;
      state.timeString = action.payload.timeString;
    },
    bookingHotelInfo: (state,action) => {
      state.adults = action.payload.adults;
      state.children = action.payload.children;
      state.timeString = action.payload.timeString;
      state.standardRoom = action.payload.standardRoom;
      state.familySuite = action.payload.familySuite;
      state.breakfast = action.payload.breakfast;
      state.extraBed = action.payload.extraBed;
      state.totalMoney = action.payload.totalMoney;
    }
  },
})

export default checkOutSlice.reducer;
export const {bookingTourInfo,bookingHotelInfo} = checkOutSlice.actions;