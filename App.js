import React, {useEffect} from 'react';
import {Provider} from 'react-redux';
import {Store} from './src/module/store'
import {PersistGate} from 'redux-persist/integration/react';
import {persistStore} from 'redux-persist';
import RouterComponent from './src/router';
import {StatusBar, View,Alert} from 'react-native';
import {enableScreens} from 'react-native-screens';
import SplashScreenComponent from './src/screens/SplashScreen';
import messaging from '@react-native-firebase/messaging';
import Geolocation from '@react-native-community/geolocation';

enableScreens();
const persistor = persistStore(Store);

const App = () => {
  useEffect(() => {
    return () => {
      persistor.flush();
    };
  }, []);
  useEffect(() => {
    const unsubscribe = messaging().onMessage(async remoteMessage => {
      console.log(remoteMessage);
      Alert.alert('A new FCM message arrived!', JSON.stringify(remoteMessage));
    });

    return unsubscribe;
  }, []);
 useEffect(()=>{
  var watchOptions = {
    frequency : 10*1000,
    timeout : 60*60*1000,
    enableHighAccuracy: true // may cause errors if true
};
const watch =Geolocation.watchPosition(on_success,on_error,watchOptions);

const on_success =()=> {
  console.log(watch)
}
const on_error =()=>{

}
 })
  return (
    <View style={{flex:1}}>
        <Provider store={Store}>
          <PersistGate
            persistor={persistor}
            children={bootstrapped =>
              {
                console.log(bootstrapped)
              if (bootstrapped) {
                return <RouterComponent />;
              } else {
                return <SplashScreenComponent />;
              }
            }}
          />
        </Provider>
    </View>
  );
};
export default App;
