
import { DocumentUpload } from '../utils/Apis/document';
import { profilePhototData, profilPhoto } from '../actions';
import { call, put } from 'redux-saga/effects';
import Apiurl, { ENV, ENV_TYPE } from '../utils/api-constants';
import { SagaIterator } from 'redux-saga';

import Toast from 'react-native-toast-message';

export const profileImageUpload = function* (action) {
  console.log(action)
  try {
    const userDetails = yield call(DocumentUpload,Apiurl.profileimage,{...action.payload});
    console.log(userDetails)
    if(userDetails?.data!==''){
    yield put(profilePhototData())
     Toast.show({
      type: 'success',
      text1:  'Completed Go to next',
      visibilityTime: 30000,
      position: 'bottom',
    });
    }
    else{
     yield put(profilePhototData())
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
    // yield put(authFailed(e?.response?.data?.message));
    Toast.show({
      type: 'error',
      text1: e?.response?.data?.message || 'Incorrect email or password!',
      visibilityTime: 30000,
      position: 'bottom',
    });
  }
};
