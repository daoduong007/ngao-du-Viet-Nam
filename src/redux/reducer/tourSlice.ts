import {createSlice} from '@reduxjs/toolkit';

interface IState {
  bookingTour : {
    idTour: number;
  }
}

const initState : IState = {
  bookingTour: {
    idTour: 0,
  }
}

const tourSlide = createSlice({
  name: 'bookingTour',
  initialState: initState,
  reducers: {
    submitBooking: (state, action) => {
      state.bookingTour.idTour= action.payload.idTour;
    }
  }
})

export default tourSlide.reducer;
export const {submitBooking} = tourSlide.actions;