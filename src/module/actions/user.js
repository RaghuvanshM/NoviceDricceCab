import { exp } from 'react-native/Libraries/Animated/Easing';
import {createAction} from 'redux-act';

export const sendOtpPhone = createAction()
export const authUser = createAction()
export const signOutUser = createAction();
export const signUpUser = createAction();
export const driverRegistor = createAction()
export const buttonClick = createAction()

export const cabinfo = createAction();
export const cabinfosave = createAction();

export const apiFailed = createAction();

export const profilPhoto = createAction()

export const documentButtonClick = createAction()
export const profilePhototData = createAction()

export const drivingLicense = createAction()

export const  AadhraImage = createAction()

export const  uploadCabImage = createAction()

export const cabvideoUpload = createAction()

export const uploddocfaild = createAction()
export const mobileAuth = createAction()
export const driversignin = createAction()
export const singinApiHit = createAction()
export const driverRegistrationid = createAction()

export const loginStatus = createAction()
export const updateDriverLocation = createAction()
export const cabinfosuccess = createAction()
