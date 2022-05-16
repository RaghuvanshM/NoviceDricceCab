
import { signInApi } from '../utils/Apis/user';
import { apiFailed, authUser, driverRegistor,loginStatus,singinApiHit } from '../actions';
import { call, put } from 'redux-saga/effects';
import Apiurl, { ENV, ENV_TYPE } from '../utils/api-constants';
import { SagaIterator } from 'redux-saga';

import Toast from 'react-native-toast-message';

export const signInDriver = function* (action) {

  try {
    const userDetails = yield call(signInApi,Apiurl.login,{...action.payload});

    if(userDetails.data.response.status==='true'){
      yield put(loginStatus(userDetails.data.data.id_driver))
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
    yield put(apiFailed(e?.response?.data?.message));
    Toast.show({
      type: 'error',
      text1: e?.response?.data?.message || 'Incorrect email or password!',
      visibilityTime: 3000,
      position: 'bottom',
    });
  }
};
