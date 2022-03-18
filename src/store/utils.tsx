import React from 'react';
import { render as rtlRender } from '@testing-library/react-native';
import { Provider } from 'react-redux';
import { mockStore } from './mockStore';

export const reduxTestRenderer = (component: React.ReactNode) => {
  return rtlRender(<Provider store={mockStore}>{component}</Provider>);
};
