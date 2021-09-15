import axios from 'axios';
import Apiurl from '../api-constants';

export const sendNotication = async (payload) => {

  return axios({
    url: `${Apiurl.sendtoUser}`,
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': Apiurl.env,
    },
    data: payload
  })
};