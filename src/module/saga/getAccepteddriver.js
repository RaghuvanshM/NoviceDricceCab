
import { getDriverData } from '../utils/Apis/getAcceptdriver';
import { sendNotication } from '../utils/Apis/sendToUser';
import { call, put } from 'redux-saga/effects';

import Toast from 'react-native-toast-message';

export const getdriverData = function* (action) {

  try {
    const userDetails = yield call(getDriverData, { ...action.payload });

  
    if (userDetails.data.response.status === 'true') {
    
      const response = yield call(sendNotication,
        {
          "registration_ids": [userDetails.data?.data[0]?.token],
          "notification": {
            "title": "india vs south africa test",
            "body": "IND chose to bat",
            "vibrate": 1,
            "sound": 1,

            "priority": "high",
            "content_available": true
          },
          "data": {
            "title": "india vs south africa test",
            "body": "IND chose to bat",
            "score": 50,
            "wicket": 1,

          }
        }
      )
      
      //  yield put(driverRegistor(userDetails.data.data.uid))
      //   yield put(driverRegistrationid(userDetails.data.data.uid))
      //   Toast.show({
      //     type: 'error',
      //     text1: userDetails.data.response.message || 'Completed Go to next',
      //     visibilityTime: 30000,
      //     position: 'bottom',
      //   });
    }
    else {
      yield put(driverRegistor(userDetails.data.response))
      //   Toast.show({
      //     type: 'error',
      //     text1: userDetails.data.response.message || 'Something Went Wrong!',
      //     visibilityTime: 30000,
      //     position: 'bottom',
      //   });
    }
    // yield put(authUser(userDetails.data.data));
  } catch (e) {
    console.log(e)
    // yield put(authFailed(e?.response?.data?.message));
    // Toast.show({
    //   type: 'error',
    //   text1: e?.response?.data?.message || 'Incorrect email or password!',
    //   visibilityTime: 30000,
    //   position: 'bottom',
    // });
  }
};
