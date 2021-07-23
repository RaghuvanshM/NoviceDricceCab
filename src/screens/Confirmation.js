import React, { Component, useEffect } from 'react';
import { Text, View, Image, StyleSheet, TouchableOpacity } from 'react-native';

import { useNavigation } from '@react-navigation/native';
import { useSelector, useDispatch } from 'react-redux';
import { phoneAuth } from '../module/actions';
import Button from '../Components/Button/Button';
import images from '../Constants/image';
const Confirmation = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  // useEffect(() => {
  //   dispatch(phoneAuth());
  // }, []);
  const onSignUpPress = () => {

    navigation.navigate('otpscreen');
  };
  const onSigninPress = () => {
    navigation.navigate('loginscreen');
  };
  return (
    <View style={{ flex: 1, justifyContent: 'center' }}>
      <View style={{flex:1}}>
        <Image
          source={images.confimationiamge}
          resizeMode="cover"
          style={{ width:'100%', bottom:0,position:'absolute', alignSelf: 'center' }}
        />
      </View>
      <View style={{ flex: 0.4, marginTop: '2%' }}>
        <View>
          <Button
            title={'SIGN  IN'}
            textStyle={styles.buttontext}
            onPress={onSigninPress}
          />
        </View>
        <View style={{ marginTop: '2%' }}>
          <Button
            title={'SIGN  UP'}
            textStyle={styles.buttontext}
            onPress={onSignUpPress}
          />
        </View>
      </View>
    </View>
  );
};
export default Confirmation;
const styles = StyleSheet.create({
  buttonText: {
    fontSize: 20,
    fontFamily: 'Gill Sans',
    textAlign: 'center',
    margin: 10,
    color: '#ffffff',
    backgroundColor: 'transparent',
  },
 
  RegisterText: {
    color: '#4c669f',
    fontSize: 20,
    fontFamily: 'Gill Sans',
    textAlign: 'center',
    margin: 10,
    backgroundColor: 'transparent',
  },
  becomemembertext: {
    fontSize: 24,
    alignSelf: 'center',
    color: '#34404b',
  },
  buttontext: {
    fontSize: 20,
    color: 'white',
    alignSelf: 'center',
    fontWeight: 'bold',
    justifyContent: 'center',
  },
});
