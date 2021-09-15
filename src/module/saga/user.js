
import { signInApi } from '../utils/Apis/user';
import { authUser, driverRegistor, driverRegistrationid } from '../actions';
import { call, put } from 'redux-saga/effects';
import Apiurl, { ENV, ENV_TYPE } from '../utils/api-constants';
import { SagaIterator } from 'redux-saga';

import Toast from 'react-native-toast-message';

export const signIn = function* (action) {
  try {
    const userDetails = yield call(signInApi, Apiurl.ragistration, { ...action.payload });

    if (userDetails.data.response.status === 'true') {
      //  yield put(driverRegistor(userDetails.data.data.uid))
      yield put(driverRegistrationid(userDetails.data.data.uid))
      Toast.show({
        type: 'error',
        text1: userDetails.data.response.message || 'Completed Go to next',
        visibilityTime: 30000,
        position: 'bottom',
      });
    }
    else {
      yield put(driverRegistor(userDetails.data.response))
      Toast.show({
        type: 'error',
        text1: userDetails.data.response.message || 'Something Went Wrong!',
        visibilityTime: 30000,
        position: 'bottom',
      });
    }
    // yield put(authUser(userDetails.data.data));
  } catch (e) {
    console.log(e)
    // yield put(authFailed(e?.response?.data?.message));
    Toast.show({
      type: 'error',
      text1: e?.response?.data?.message || 'Incorrect email or password!',
      visibilityTime: 30000,
      position: 'bottom',
    });
  }
};
