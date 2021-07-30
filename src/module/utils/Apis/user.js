import axios from 'axios';
import Apiurl from '../api-constants';

export const signInApi = async (endpoint, payload) => {
  console.log(payload)
  console.log(`${Apiurl.baseUrl}${endpoint}`)
  return axios({
    url: `${Apiurl.baseUrl}${endpoint}`,
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'x-api-key': 'prabhat@cab',
    },
    data: payload
  })
};