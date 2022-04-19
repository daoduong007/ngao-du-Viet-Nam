import {createSlice } from '@reduxjs/toolkit';


interface ISignUpState {
  email: string;
  password: string;
}

const initialState : ISignUpState = {
  email: '',
  password: ''
}

const signUpSlice = createSlice({   
  name: 'signUp',
  initialState,
  reducers: {
    SignUpSuccess: (state, action) => {
      state.email = action.payload.email;
      state.password = action.payload.password;
    },

    SignUpReset: (state, action) => {
      state.email = '';
      state.password = '';
    },
  },
})

export default signUpSlice.reducer;
export const {SignUpSuccess,SignUpReset} = signUpSlice.actions;