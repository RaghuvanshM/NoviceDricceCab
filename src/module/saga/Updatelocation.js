
import { signInApi } from '../utils/Apis/user';
import { authUser, driverRegistor, driverRegistrationid } from '../actions';
import { call, put } from 'redux-saga/effects';
import Apiurl, { ENV, ENV_TYPE } from '../utils/api-constants';
import { SagaIterator } from 'redux-saga';

import Toast from 'react-native-toast-message';

export const upDateLocation = function* (action) {
    try {
        const userDetails = yield call(signInApi, Apiurl.updatelocation, { ...action.payload });

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
