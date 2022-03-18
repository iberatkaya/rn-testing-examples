import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { User } from '../../modals/user';
import { HomeState } from './types';

// Define the initial state using that type
const initialState: HomeState = {
  error: undefined,
  user: undefined,
  isFetching: false,
};

export const homeSlice = createSlice({
  name: 'home',
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    // Use the PayloadAction type to declare the contents of `action.payload`
    fetchUserRequest: (state, _action: PayloadAction<string>) => {
      state.isFetching = true;
    },
    fetchUserSuccess: (state, action: PayloadAction<User>) => {
      state.isFetching = false;
      state.user = action.payload;
      state.error = undefined;
    },
    fetchUserFailure: (state, action: PayloadAction<string>) => {
      state.isFetching = false;
      state.user = undefined;
      state.error = action.payload;
    },
  },
});

export const { fetchUserFailure, fetchUserRequest, fetchUserSuccess } =
  homeSlice.actions;

export default homeSlice.reducer;
