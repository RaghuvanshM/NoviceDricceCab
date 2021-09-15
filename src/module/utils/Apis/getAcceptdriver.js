import axios from 'axios';
import Apiurl from '../api-constants';

export const getDriverData = async (payload) => {
  return axios({
    url: `${Apiurl.getdriverdata}`,
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'x-api-key': 'prabhat@cab',
    },
    data: payload
  })
};