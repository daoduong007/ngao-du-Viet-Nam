import {createSlice } from '@reduxjs/toolkit';

import {getUser} from '@redux';

interface ILoginState {
  accessToken: string,
  loadingLogin: boolean
}

const initialState : ILoginState = {
  accessToken: '',
  loadingLogin: true
}

const loginSlice = createSlice({
  name: 'login',
  initialState,
  reducers: {
    resetAccessToken: (state,action) => {
      state.accessToken = '';
      state.loadingLogin = true;
    }
  },
  extraReducers:(builder) => {
    builder.addCase(getUser.fulfilled, (state, action) => {
      state.accessToken = action.payload.data.accessToken;
      state.loadingLogin = false;
    }),

    builder.addCase(getUser.pending, (state, action) => {
      state.loadingLogin = true;
    })
  },
})

export default loginSlice.reducer;
export const {resetAccessToken} = loginSlice.actions;