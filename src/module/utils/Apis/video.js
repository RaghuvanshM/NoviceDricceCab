import RNFetchBlob from 'rn-fetch-blob';
import Apiurl from '../api-constants';
export const VideoUpload = async (endurl,payload)=>{
    console.log(`${Apiurl.baseUrl}${endurl}`)
     let token =38;
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
               payload,
                { name: 'id_driver', data: token.toString() },
              ],
            )
      }