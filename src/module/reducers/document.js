import {createReducer} from 'redux-act';

import { profilPhoto,documentButtonClick, profilePhototData, uploddocfaild } from '../actions';
const initialState = {
   isUpload:false,
   isclick:false,
   isFailed:false
    
  };

  export const document = createReducer({}, initialState);

  document.on(profilPhoto, (state, payload) => {
    console.log(payload)
     return {
       ...state,
       isAuth: payload,
       profile: payload,
     };
   });
   document.on(documentButtonClick,(state)=>{
     return{
       ...state,
       isclick:true
     }
   })

  document.on(uploddocfaild,(state,payload)=>{
    return{
      ...state,
      isclick:false
    }
  })
  document.on(profilePhototData,(state,payload)=>{
    console.log(payload)
    return{
      ...state,
      isclick:false
    }
  })