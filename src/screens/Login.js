import React, { Component, useEffect, useState } from 'react';
import { Text, View, StyleSheet, TouchableOpacity, Button, Image, ScrollView,ActivityIndicator } from 'react-native';
import { showMessage, hideMessage } from 'react-native-flash-message';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/AntDesign';

import { useDispatch, useSelector } from 'react-redux';
import { authUser, buttonClick, driversignin, signUpUser } from '../module/actions';
import CutomButton from '../Components/Button/Button';
import CustomTextInput from '../Components/TextInput/TextBox';
import CustomTextBoxLabel from '../Components/Label/TextBoxLabel'
import Colors from '../Components/Colors';
import Iconlist from '../Components/icon'
import Geolocation from '@react-native-community/geolocation';
import { WebView } from 'react-native-webview';

import images from '../Constants/image'
import { currentLocation } from '../module/utils/Apis/currentLatLong'
import { getButtonClick } from '../module/selectors';
import { Fragment } from 'react';
const LoginScreen = ({ props }) => {
  const navigation = useNavigation()
  const dispatch = useDispatch()
  const [email, setEmail] = useState('mani@gamil.com')
  const [password, setPassword] = useState('12345')
  const isclick = useSelector(getButtonClick)
  console.log(isclick)
  const onLoginPress = async () => {
    dispatch(buttonClick())
    // await Geolocation.getCurrentPosition(info => {
    //   console.log(info)
    //   console.log('hell world')
    // })
    // console.log('out side await')
    dispatch(driversignin({ email, password }))
  }
  const onReset = () => {
    navigation.navigate('verify')
  }
  return (
    <Fragment>
      {isclick && (
        <View
          style={{
            position: 'absolute',
            width: '100%',
            height: '100%',
            justifyContent: 'center',
            backgroundColor: 'rgba(3,3,3, 0.8)',
            zIndex: 10,
          }}>
          <ActivityIndicator size="large" color="#fff" />
        </View>
      )}
      <ScrollView
        contentContainerStyle={{ flexGrow: 1, justifyContent: 'center' }}
      >
        <TouchableOpacity style={{ flex: 1 }}
          onPress={() => { navigation.goBack() }}
        >
          <Icon
            name={Iconlist.arrowleft}
            size={30}
            style={{ margin: '4%' }}
          />
        </TouchableOpacity>
        <View style={{ flex: 0 }}>
          <Image
            source={images.parrentloginiamge}
            resizeMode='contain'
            style={{ height: 70, width: '90%' }}
          />
        </View>
        <View style={{ flex: 1 }}>
          <View style={{ width: '90%', alignSelf: 'center' }}>
            <CustomTextBoxLabel
              label={'Enter Email'}
            />
          </View>
          <CustomTextInput
            placeholder={'Email'}
          />
          <View style={{ width: '90%', alignSelf: 'center' }}>
            <CustomTextBoxLabel
              label={'Enter Password'}
            />
          </View>
          <CustomTextInput
            placeholder={'Password '}
          />
          <View>
            <CutomButton
              title={'Login'}
              textStyle={styles.buttontext}
              onPress={() => { onLoginPress() }}

            />
          </View>
          <View style={styles.forgetpasswordview}>
            <Text style={styles.forgetpasstext}>
              Forget Password?
            </Text>
            <TouchableOpacity
              onPress={() => onReset()}
            >
              <Text style={styles.resettext}>
                Reset here
              </Text>
            </TouchableOpacity>
          </View>
        </View>

      </ScrollView>
    </Fragment>
  );
};

export default LoginScreen;
const styles = StyleSheet.create({
  buttontext: {
    fontSize: 20,
    color: 'white',
    alignSelf: 'center',
    fontWeight: 'bold',

    justifyContent: 'center',
  },
  forgetpasswordview: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: '3%'

  },
  forgetpasstext: {
    fontSize: 18,
    color: Colors.forgetPassowrdcolor,
    fontFamily: 'OpenSans-Bold'
  },
  resettext: {
    fontSize: 18,
    color: Colors.resesttTextColor,
    fontFamily: 'OpenSans-Bold'
  }
});