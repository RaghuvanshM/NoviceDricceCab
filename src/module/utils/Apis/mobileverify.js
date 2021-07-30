import axios from 'axios';
import Apiurl from '../api-constants';

export const sendOtp = async (endpoint, payload) => {

  console.log(`${Apiurl.otpUrl}${payload.phonenumber}/${payload.otp}`)
  const otpurl =`${Apiurl.otpUrl}${payload.phonenumber}/${payload.otp}`
  return axios({
    url: otpurl,
    method:'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  
  })
};