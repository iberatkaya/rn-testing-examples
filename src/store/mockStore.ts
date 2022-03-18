import { configureStore } from '@reduxjs/toolkit';
import homeSlice from '../slices/homeSlice';

export const mockStore = configureStore({
  reducer: {
    homeSlice: homeSlice,
  },
});
