
import { signInApi } from '../utils/Apis/user';
import { apiFailed, authUser, driverRegistor,singinApiHit } from '../actions';
import { call, put } from 'redux-saga/effects';
import Apiurl, { ENV, ENV_TYPE } from '../utils/api-constants';
import { SagaIterator } from 'redux-saga';

import Toast from 'react-native-toast-message';

export const signInDriver = function* (action) {
  console.log(action)
  try {
    const userDetails = yield call(signInApi,Apiurl.login,{...action.payload});
    console.log(userDetails)
    if(userDetails.data.response.status==='true'){
      yield put(singinApiHit(userDetails.data.data.uid))
     Toast.show({
      type: 'error',
      text1: userDetails.data.response.message || 'Completed Go to next',
      visibilityTime: 3000,
      position: 'bottom',
    });
    }
    else{
      yield put(singinApiHit(userDetails.data.data))
     
      Toast.show({
        type: 'error',
        text1: userDetails.data.response.message || 'Something Went Wrong!',
        visibilityTime: 3000,
        position: 'bottom',
      });
    }
    // yield put(authUser(userDetails.data.data));
  } catch (e) {
    console.log(e)
    yield put(apiFailed(e?.response?.data?.message));
    Toast.show({
      type: 'error',
      text1: e?.response?.data?.message || 'Incorrect email or password!',
      visibilityTime: 3000,
      position: 'bottom',
    });
  }
};
