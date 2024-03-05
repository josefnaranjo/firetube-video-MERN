import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  currentUser: null,
  loading: false,
  error: false
}

export const videoSlice = createSlice({
    name: 'video',
    initialState,
    reducers: {
      loginStart: (state) => {
        state.loading = true;
      },
      loginSuccess: (state, action) => {
        state.loading = false;
        state.currentUser =  action.payload;
      },
      loginFailure: (state) => {
        state.loading = false;
        state.error = true;
      },
      logout:(state)=> {
          return initialState;
      }
    },
  })
  
export  const {loginStart, loginSuccess, loginFailure, logout}= videoSlice.actions
// The value we returned from reduceReducers is the combined reducer function that Redux will call when an action is dispatched.
  
export default videoSlice.reducer