
import { sendOtp } from '../utils/Apis/mobileverify';

import { call, put } from 'redux-saga/effects';
import Apiurl, { ENV, ENV_TYPE } from '../utils/api-constants';
import { SagaIterator } from 'redux-saga';

import Toast from 'react-native-toast-message';
import { apiFailed, sendOtpPhone } from '../actions';

export const verifyNumber = function* (action) {
  console.log(action)
  try {
    const userDetails = yield call(sendOtp,Apiurl.aadharImage,{...action.payload});
   console.log(userDetails.data)
    if(userDetails.data.Status==='Success'){
      let data ={response:userDetails.data,payload:action.payload}
    yield put(sendOtpPhone(data))
     Toast.show({
      type: 'success',
      text1:  `Otp send to ` ,
      visibilityTime: 3000,
      position: 'bottom',
    });
    }
    else{
      yield put(sendOtpPhone(userDetails.data))
      Toast.show({
        type: 'error',
        text1:  'Something Went Wrong!',
        visibilityTime: 30000,
        position: 'bottom',
      });
    }
    // yield put(authUser(userDetails.data.data));
  } catch (e) {
    console.log(e)
    // yield put(profilePhototData())
    yield put(apiFailed(e?.response?.data?.message));
    Toast.show({
      type: 'error',
      text1: e?.response?.data?.message || 'Something Went Wrong ',
      visibilityTime: 3000,
      position: 'bottom',
    });
  }
};
