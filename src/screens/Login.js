import React, { Component, useEffect, useState } from 'react';
import { Text, View, StyleSheet, TouchableOpacity, Button, Image, ScrollView } from 'react-native';
import { showMessage, hideMessage } from 'react-native-flash-message';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/AntDesign';

import { useDispatch } from 'react-redux';
import { authUser } from '../module/actions';
import CutomButton from '../Components/Button/Button';
import CustomTextInput from '../Components/TextInput/TextBox';
import CustomTextBoxLabel from '../Components/Label/TextBoxLabel'
import Colors from '../Components/Colors';
import Iconlist from '../Components/icon'
import images from '../Constants/image'
const LoginScreen = ({ props }) => {
  const navigation = useNavigation()
  const dispatch = useDispatch()
  const onLoginPress = () => {
    dispatch(authUser(true))
  }
  return (
    // <View style={styles.loginview}>

    //   <TouchableOpacity
    //     onPress={() => {
    //       navigation.goBack();
    //     }}>
    //     <View style={{padding: 10}}>
    //       <Icon name="arrowleft" size={30} color="black" />
    //     </View>
    //   </TouchableOpacity>
    //   <Text style={{fontSize: 20, alignSelf: 'center', color: '#343a40'}}>
    //     {' '}
    //     Member Login{' '}
    //   </Text>
    //   <CustomTextInput />
    //   <View style={styles.loginview}>
    //     <View style={styles.singletextinput}>
    //       <TextInput
    //         label="Email"
    //         onChangeText={text => {
    //           setEmail(text);
    //         }}
    //       />
    //     </View>

    //     <View style={styles.singletextinput}>
    //       <TextInput
    //         label="Password"
    //         onChangeText={text => {
    //           setPassword(text);
    //         }}
    //       />
    //     </View>
    //     {/* <TouchableOpacity
    //       onPress={loginButtonClick}
    //       >
    //         <LinearGradient
    //           colors={['#e83e8c', '#e83e8c', '#e83e8c']}
    //           style={styles.linearGradient}>
    //           <Text style={styles.buttonText}>Login Now</Text>
    //         </LinearGradient>
    //       </TouchableOpacity> *parrentloginiamgetton.Color.Dark}
    //     />
    //   </View>
    // </View>
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
          <Text style={styles.resettext}>
            Reset here
          </Text>
        </View>
      </View>

    </ScrollView>
  );
};

export default LoginScreen;
const styles = StyleSheet.create({
  loginview: {
    flex: 1,
  },

  loginview: { justifyContent: 'center', flex: 1, alignSelf: 'center' },
  buttonText: {
    fontSize: 18,
    fontFamily: 'Gill Sans',
    textAlign: 'center',
    margin: 10,
    color: '#ffffff',
    backgroundColor: 'transparent',
  },

  googleloginbutton: {
    justifyContent: 'center',
    alignSelf: 'center',
    marginBottom: '3%',
    flex: 1
  },
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