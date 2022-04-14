import {createSlice } from '@reduxjs/toolkit';

import {getTours} from './thunkApi';

interface IState {
  bookingTour : {
    idTour: number;
  },
  entities: any[],
  loadingTour: true | false,
}

const initialState : IState = {
  bookingTour: {
    idTour: 0,
  },
  entities: [],
  loadingTour: true,
}


const tourSlide = createSlice({
  name: 'tours',
  initialState,
  reducers: {
    submitBooking: (state, action) => {
      state.bookingTour.idTour= action.payload.idTour;
    }
  },
  extraReducers:(builder) => {
    builder.addCase(getTours.fulfilled, (state, action) => {
      state.entities.push(action.payload);
      state.loadingTour = false;
    }),

    builder.addCase(getTours.pending, (state, action) => {
      state.loadingTour = true;
    })
  },
})

export default tourSlide.reducer;
export const {submitBooking} = tourSlide.actions;