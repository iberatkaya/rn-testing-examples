import { configureStore } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';
import homeSlice from '../slices/homeSlice';
import sagas from './sagas';

const sagaMiddleware = createSagaMiddleware();

export const store = configureStore({
  reducer: {
    homeSlice: homeSlice,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware().concat(sagaMiddleware),
});

sagas.map(saga => sagaMiddleware.run(saga));

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
