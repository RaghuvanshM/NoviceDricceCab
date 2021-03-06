import { takeLatest } from 'redux-saga/effects';
import * as user from './user';
import * as cabdetail from './cabdetails'
import * as ProfilePhoto from './profilephoto';
import * as DrivingLicens from './driverlicense'
import * as aadharImage from './AdharPic'
import * as CabPicture from './cabImage'
import  * as uploadCabVideo from './Video'
import * as MobileAuthentication from './MobielAuth'
import * as SigninDriver from './signin'
import * as actions from '../actions';
import * as UpdateDriverLocation from './Updatelocation'
import * as driverData from './getAccepteddriver'
import * as notification from './sendNotification'
export default function* rootSaga() {

  // yield takeLatest(actions.getAirQualityIndex, airQuality.getAirQuality);
  yield takeLatest(actions.signUpUser, user.signIn);
  yield takeLatest(actions.cabinfo, cabdetail.saveCabDetil);
  yield takeLatest(actions.profilPhoto, ProfilePhoto.profileImageUpload);
  yield takeLatest(actions.drivingLicense, DrivingLicens.drivingLicense);
  yield takeLatest(actions.AadhraImage, aadharImage.aadharPhoto);
  yield takeLatest(actions.uploadCabImage, CabPicture.cabPhoto);
  yield takeLatest(actions.cabvideoUpload, uploadCabVideo.cabVideo);
  yield takeLatest(actions.mobileAuth, MobileAuthentication.verifyNumber);
  yield takeLatest(actions.driversignin, SigninDriver.signInDriver);
  yield takeLatest(actions.updateDriverLocation,UpdateDriverLocation.upDateLocation)
  yield takeLatest(actions.getAccetedDriverdata,driverData.getdriverData)
  yield takeLatest(actions.sendNoticationUser,notification.sendNotificationtoUser)




  //   yield takeLatest(actions.dropAddToLatLong, AddTolatlong.dropAddressTolatlong);

  // yield takeLatest(actions.getZoneDetails, zones.getZoneDetails);
  // yield takeLatest(actions.changeZoneNameAction, zones.setZoneName);
  // yield takeLatest(actions.changeTintAction, zones.changeTintValue);
}