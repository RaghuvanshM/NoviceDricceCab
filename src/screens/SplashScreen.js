import React from 'react';
import { Text,View,Image } from 'react-native';
import image from '../Constants/image';

const SplashScreen =()=>{
 
    return(
      <View style={{flex:1}}>
      <Image
        source={image.confimationiamge}
        resizeMode="cover"
        style={{ width:'100%', bottom:0,position:'absolute', alignSelf: 'center' }}
      />
    </View>
    )
}
export default SplashScreen;