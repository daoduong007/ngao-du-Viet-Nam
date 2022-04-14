import {createAsyncThunk} from '@reduxjs/toolkit'
import { hotelApi ,tourApi} from '@api';

export const getHotels = createAsyncThunk('hotels/getHotel',async (thunkAPI) => {
  const response = await hotelApi.getAll();

  return response;
}) 

export const getTours = createAsyncThunk('tours/getTour', async (thunkAPI) => {
  const response = await tourApi.getAll();

  return response;
})
