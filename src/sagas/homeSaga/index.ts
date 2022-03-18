import { call, put, takeEvery } from 'redux-saga/effects';
import { User } from '../../models/user';
import {
  fetchUserFailure,
  fetchUserRequest,
  fetchUserSuccess,
} from '../../slices/homeSlice';
import { sleep } from '../../utils';

function* fetchUser(action: ReturnType<typeof fetchUserRequest>) {
  try {
    // Mock an API call.
    yield call(sleep, 2000);
    if (action.payload === '123') {
      const mockUser: User = {
        id: '123',
        name: 'John Doe',
      };
      yield put(fetchUserSuccess(mockUser));
    } else {
      yield put(fetchUserFailure('User not found'));
    }
  } catch (e) {
    if (e instanceof Error) {
      yield put(fetchUserFailure(e.message));
    } else {
      yield put(fetchUserFailure('An unknown error occured'));
    }
  }
}

function* mySaga() {
  yield takeEvery(fetchUserRequest.type, fetchUser);
}

export default mySaga;
