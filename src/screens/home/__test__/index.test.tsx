import React from 'react';
import { act } from 'react-test-renderer';
import waitForExpect from 'wait-for-expect';
import HomeScreen from '..';
import { fetchUserRequest } from '../../../slices/homeSlice';
import { createTestStore } from '../../../store/mockStore';
import { reduxTestRenderer } from '../../../store/utils';

describe('API call test', () => {
  it('should return the user', async () => {
    const myStore = createTestStore();
    const { queryByText } = reduxTestRenderer(<HomeScreen />, myStore);

    expect(myStore.getState().homeSlice.user).toBeUndefined();

    act(() => {
      myStore.dispatch(fetchUserRequest('123'));
    });

    // Saga update will trigger UI change.
    await act(async () => {
      // Wait for Saga to finish.
      await waitForExpect(() => {
        expect(myStore.getState().homeSlice.user).not.toBeUndefined();
        expect(myStore.getState().homeSlice.error).toBeUndefined();
      }, 3000);
    });

    expect(queryByText(myStore.getState().homeSlice.user!.name)).not.toBeNull();
  }, 6000);

  it('should not return the user', async () => {
    const myStore = createTestStore();

    const { queryByText } = reduxTestRenderer(<HomeScreen />, myStore);

    expect(myStore.getState().homeSlice.user).toBeUndefined();

    act(() => {
      myStore.dispatch(fetchUserRequest('1234'));
    });

    // Saga update will trigger UI change.
    await act(async () => {
      // Wait for Saga to finish.
      await waitForExpect(() => {
        expect(myStore.getState().homeSlice.user).toBeUndefined();
        expect(myStore.getState().homeSlice.error).not.toBeUndefined();
      }, 3000);
    });

    expect(queryByText(myStore.getState().homeSlice.error!)).not.toBeNull();
  }, 6000);
});
