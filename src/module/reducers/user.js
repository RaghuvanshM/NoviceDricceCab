import {createReducer} from 'redux-act';
import {
  authUser,
  signOutUser,
  driverRegistor,
  buttonClick,
  cabinfosave,
  apiFailed,
  sendOtp,
  sendOtpPhone
} from '../actions';

const initialState = {
  isAuth:false,
  profile: '',
  userid:'',
  issubmit:false,
  phonnumberdata:''
  
};

export const user = createReducer({}, initialState);
user.on(authUser, (state, payload) => {
 console.log(payload)
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
  console.log(payload)
  return {
    ...state,
    issubmit: false,
    userid:payload
  };
});

user.on(buttonClick, (state) => {
  return {
    ...state,
    issubmit: true,
  };
});
user.on(cabinfosave, (state,payload) => {
  console.log(payload)
  return {
    ...state,
    issubmit: false,
    message:payload.message
  };
});

user.on(apiFailed, (state,payload) => {
  return {
    ...state,
    issubmit: false,
   
  };
});
user.on(sendOtpPhone, (state,payload) => {
 
  return {
    ...state,
    phonnumberdata:payload,
    issubmit:false
   
  };
});

