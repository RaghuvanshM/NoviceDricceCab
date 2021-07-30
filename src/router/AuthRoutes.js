import React, { Component } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Login from '../screens/Login';
import Signup from '../screens/SignUp';
import Otp from '../screens/Otp';
import OtpScreen from '../screens/OtpScreen';
import Confirmation from '../screens/Confirmation';
import { NavigationContainer } from '@react-navigation/native';
import Registration from '../screens/Registration';
import CabDetail from '../screens/Cabdetail';
import UploadDocument from '../screens/Uploaddoc';
import Photo from '../screens/DocumentScreen/photo';
import DriverLicense from '../screens/DocumentScreen/DriverLicense';
import AadharPhoto from '../screens/DocumentScreen/AadharPhoto';
import CabPhoto from '../screens/DocumentScreen/CabPhoto';
import VideoUpload from '../screens/DocumentScreen/VideoUpload';
import Profile from '../screens/Profile';
import VerifyEmail from '../screens/VerifyEmail';
import EnterCode from '../screens/EnterCode';
import ResetPassword from '../screens/ResetPassword';
const Stack = createStackNavigator();
function authStack() {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="confirmationscreen"
                headerMode={'none'}
            >
                <Stack.Screen name="registration" component={Registration} />
                <Stack.Screen name="cabdetails" component={CabDetail} />
                <Stack.Screen name="driverlicense" component={DriverLicense} />
                <Stack.Screen name="aadharphoto" component={AadharPhoto} />
                <Stack.Screen name="cabphoto" component={CabPhoto} />
                <Stack.Screen name="videoupload" component={VideoUpload} />
                <Stack.Screen name="uploaddoc" component={UploadDocument} />
                <Stack.Screen name="photo" component={Photo} />
                <Stack.Screen name="confirmationscreen" component={Confirmation} />
                <Stack.Screen name="otpverificatonscreen" component={Otp} />
                <Stack.Screen name="otpscreen" component={OtpScreen} />
                <Stack.Screen name="loginscreen" component={Login} />
                <Stack.Screen name="signupScreen" component={Signup} />
                <Stack.Screen name="verify" component={VerifyEmail} />
                <Stack.Screen name="enterotp" component={EnterCode} />
                <Stack.Screen name="updatepass" component={ResetPassword} />


          
                {/* <Stack.Screen name="studentSignupScreen" component={StudentSignup} options={{headerShown:false}} />
            <Stack.Screen name="linkAccountScreen" component={LinkAccount} options={{headerShown:false}} />
            <Stack.Screen name="parentSignupScreen" component={ParentSignup} options={{headerShown:false}} />
            <Stack.Screen name="loginScreen" component={Login} options={{headerShown:false}} />
            <Stack.Screen name="studentLoginScreen" component={StudentLogin} options={{headerShown:false}} />            
            <Stack.Screen name="parentParentScreen" component={ParentLogin} options={{headerShown:false}} /> */}
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default authStack;
