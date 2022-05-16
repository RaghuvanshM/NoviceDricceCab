import { signInApi } from '../utils/Apis/user';
import {cabinfo, cabinfosave,apiFailed, cabinfosuccess } from '../actions';
import { call, put } from 'redux-saga/effects';
import Apiurl, { ENV, ENV_TYPE } from '../utils/api-constants';
import { SagaIterator } from 'redux-saga';

import Toast from 'react-native-toast-message';

export const saveCabDetil = function* (action) {
  try {
    const userDetails = yield call(signInApi,Apiurl.cabdetail,{...action.payload,});
 
    if(userDetails.data.response.status==='true'){
     yield put(cabinfosuccess())
     Toast.show({
      type: 'error',
      text1: userDetails.data.response.message || 'Completed Go to next',
      visibilityTime: 30000,
      position: 'bottom',
    });
    }
    else{
     yield put(cabinfosave(userDetails.data.response))
      Toast.show({
        type: 'error',
        text1: userDetails.data.response.message || 'Please Fill All the fields ',
        visibilityTime: 30000,
        position: 'bottom',
      });
    }
    // yield put(authUser(userDetails.data.data));
  } catch (e) {
    console.log(e)
    yield put(apiFailed(e?.response?.data?.message));
    yield put(cabinfosave(userDetails.data.response))
    Toast.show({
      type: 'error',
      text1: e?.response?.data?.message || 'Something Went Wrong!',
      visibilityTime: 30000,
      position: 'bottom',
      
    });
  }
};
