import { createReducer } from 'redux-act';
import { saveNotificationUser, senddriverToUser } from '../actions';

const initialState = {
    driverData: [],
    userData:''

};
export const sendDataToUser = createReducer({}, initialState);

sendDataToUser.on(senddriverToUser,(state)=>{
    return{
      ...state,
      isclick:true
    }
  })
  sendDataToUser.on(saveNotificationUser,(state,payload)=>{
 
    return{
      ...state,
      userData:payload
    }
  })