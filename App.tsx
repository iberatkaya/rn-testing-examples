import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import { Provider } from 'react-redux';
import AppNav from './src/navigation';
import { store } from './src/store';

const App = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <AppNav />
      </NavigationContainer>
    </Provider>
  );
};

export default App;
