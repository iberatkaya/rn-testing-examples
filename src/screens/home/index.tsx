import React, { useEffect } from 'react';
import { ActivityIndicator, Text, View } from 'react-native';
import { fetchUserRequest } from '../../slices/homeSlice';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import styles from './styles';

const HomeScreen = () => {
  const dipatch = useAppDispatch();
  const user = useAppSelector(state => state.homeSlice.user);
  const error = useAppSelector(state => state.homeSlice.error);
  const isFetching = useAppSelector(state => state.homeSlice.isFetching);

  useEffect(() => {
    if (!user) {
      dipatch(fetchUserRequest('123'));
    }
  }, []);

  return (
    <View style={styles.container}>
      {isFetching ? (
        <ActivityIndicator testID="loading-indicator" size="large" />
      ) : error ? (
        <Text testID="error" style={styles.text}>
          {error}
        </Text>
      ) : user ? (
        <Text testID="username" style={styles.text}>
          {user.name}
        </Text>
      ) : null}
    </View>
  );
};

export default HomeScreen;
