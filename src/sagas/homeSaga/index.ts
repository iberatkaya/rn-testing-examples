import { call, put, takeEvery } from 'redux-saga/effects';
import { User } from '../../modals/user';
import {
  fetchUserFailure,
  fetchUserRequest,
  fetchUserSuccess,
} from '../../slices/homeSlice';
import { sleep } from '../../utils';

function* fetchUser(action: ReturnType<typeof fetchUserRequest>) {
  try {
    if (action.payload === '123') {
      const mockUser: User = {
        id: '123',
        name: 'John Doe',
      };
      yield call(sleep, 3000);
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
