import { useSelector } from 'react-redux';
import RNFetchBlob from 'rn-fetch-blob';
import { getdriverId } from '../../selectors/user';
import Apiurl from '../api-constants';
import store from '../../store'
export const DocumentUpload = async(endurl,payload)=>{
  console.log(store.getState())
  console.log(payload)
  console.log(`${Apiurl.baseUrl}${endurl}`)
       return  RNFetchBlob.fetch(
            'POST',
            `${Apiurl.baseUrl}${endurl}`,
            {
              Authorization: 'Bearer access-token',
              otherHeader: 'foo',
              'Content-Type': 'multipart/form-data',
              'x-api-key': 'prabhat@cab',
            },
            [
             payload
            ],
          )
    }

 