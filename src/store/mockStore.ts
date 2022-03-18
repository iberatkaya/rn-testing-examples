import { configureStore } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';
import homeSlice from '../slices/homeSlice';
import sagas from './sagas';

export const createTestStore = () => {
  const sagaMiddleware = createSagaMiddleware();

  const store = configureStore({
    reducer: {
      homeSlice: homeSlice,
    },
    middleware: getDefaultMiddleware =>
      getDefaultMiddleware().concat(sagaMiddleware),
  });

  [...sagas].map(saga => sagaMiddleware.run(saga));

  return store;
};
