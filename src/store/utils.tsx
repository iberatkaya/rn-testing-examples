import React from 'react';
import { render as rtlRender } from '@testing-library/react-native';
import { Provider } from 'react-redux';
import { Store } from '@reduxjs/toolkit';

export const reduxTestRenderer = (component: React.ReactNode, store: Store) => {
  return rtlRender(<Provider store={store}>{component}</Provider>);
};
