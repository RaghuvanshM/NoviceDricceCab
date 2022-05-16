import {createReducer} from 'redux-act';
import {
  authUser,
  signOutUser,
  driverRegistor,
  buttonClick,
  cabinfosave,
  apiFailed,
  sendOtp,
  sendOtpPhone,
  singinApiHit,
  driverRegistrationid,
  loginStatus,
  cabinfosuccess,
  cabinfo,
} from '../actions';

const initialState = {
  isAuth:false,
  profile: '',
  userid:'',
  issubmit:false,
  phonnumberdata:'',
  apifailed:false,
  isuserdetail:false,
  iscabinfo:false

  
};

export const user = createReducer({}, initialState);
user.on(authUser, (state, payload) => {

  return {
    ...state,
 
    profile: payload,
  };
});
user.on(signOutUser, state => {

  return {
    ...state,
    isAuth: false,
    profile: '',
  };
});
user.on(driverRegistor, (state,payload) => {

  return {
    ...state,
    issubmit: false,
    isuserdetail:false
   
  };
});

user.on(buttonClick, (state) => {
  return {
    ...state,
    issubmit:true,
  };
});
user.on(cabinfosave, (state,payload) => {
  
  return {
    ...state,
    issubmit: false,
    message:payload.message,
    iscabinfo:false
  };
});

user.on(apiFailed, (state,payload) => {
 
  return {
    ...state,
    issubmit: false,
    apifailed:true,
    iscabinfo:false
   
  };
});
user.on(sendOtpPhone, (state,payload) => {
 
  return {
    ...state,
    phonnumberdata:payload,
    issubmit:false
   
  };
});

user.on(singinApiHit, (state,payload) => {
 
  return {
    ...state,
    issubmit:false
   
  };
});
user.on(driverRegistrationid, (state,payload) => {

  return {
    ...state,
    issubmit:false,
    userid:payload,
    isuserdetail:true,
    logindriverid:''
   
  };
});
user.on(loginStatus, (state,payload) => {

  return {
    ...state,
    issubmit:false,
    isAuth:true,
    logindriverid:payload
  };
});
user.on(cabinfosuccess, (state,payload) => {
  return {
    ...state,
    issubmit:false,
    iscabinfo:true,
    profile:true,
  };
});