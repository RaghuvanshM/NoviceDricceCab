/**
 * @format
 */
import React from 'react'
import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import Toast from 'react-native-toast-message';

const Root =()=>{
    return(
        <>
        <App />
        <Toast ref={(ref) => Toast.setRef(ref)} />
        </>
    )
}

AppRegistry.registerComponent(appName, () => Root);
