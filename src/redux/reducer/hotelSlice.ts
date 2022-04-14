import {createSlice,createAsyncThunk } from '@reduxjs/toolkit';

import {getHotels} from '@redux';

interface IhotelState {
  entities: any[],
  loadingHotel: boolean
}

const initialState : IhotelState = {
  entities: [],
  loadingHotel: true
}

const hotelSlice = createSlice({
  name: 'hotels',
  initialState,
  reducers: {},
  extraReducers:(builder) => {
    builder.addCase(getHotels.fulfilled, (state, action) => {
      state.entities.push(action.payload);
      state.loadingHotel = false;
    }),

    builder.addCase(getHotels.pending, (state, action) => {
      state.loadingHotel = true;
    })
  },
})

export default hotelSlice.reducer;