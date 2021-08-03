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
  singinApiHit
} from '../actions';

const initialState = {
  isAuth:false,
  profile: '',
  userid:'',
  issubmit:false,
  phonnumberdata:'',
  apifailed:false,
  
};

export const user = createReducer({}, initialState);
user.on(authUser, (state, payload) => {

  return {
    ...state,
    isAuth: payload,
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
    userid:payload
  };
});

user.on(buttonClick, (state) => {
  return {
    ...state,
    issubmit:false,
  };
});
user.on(cabinfosave, (state,payload) => {
  
  return {
    ...state,
    issubmit: false,
    message:payload.message
  };
});

user.on(apiFailed, (state,payload) => {
  console.log('apifailed')
  return {
    ...state,
    issubmit: false,
    apifailed:true
   
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
