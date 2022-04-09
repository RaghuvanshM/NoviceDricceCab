import React, { Component, useEffect } from 'react';
import { Text, View, Image, StyleSheet, TouchableOpacity, StatusBar, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useSelector, useDispatch } from 'react-redux';
import { phoneAuth } from '../module/actions';
import Button from '../Components/Button/Button';
import images from '../Constants/image';
import BackgroundImage from '../Components/BackgroundImage/BackgroundImage';
import TextBoxComponent from '../Components/TextInput/TextBox';
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
    <>
      <StatusBar hidden />
      <BackgroundImage>
        <ScrollView
          contentContainerStyle={{ flexGrow: 1, justifyContent: "center" }}
        >
          <TextBoxComponent
            placeholder={"* Enter Email"}
            onChangeText={(text) => setEmail(text)}
          />
          <TextBoxComponent
            placeholder={"* Enter Password"}
            onChangeText={(text) => setPassword(text)}
          />

          <View style={{ flexDirection: 'row', justifyContent: 'space-between', padding: 10 }}>

            <Button
              title={'SIGN  IN'}
              textStyle={styles.buttontext}
              onPress={onSigninPress}
            />


            <Button
              title={'SIGN  UP'}
              textStyle={styles.buttontext}
              onPress={onSignUpPress}
            />
          </View>

        </ScrollView>
      </BackgroundImage>
    </>
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
    fontSize: 16,
    color: 'white',
    alignSelf: 'center',
    fontWeight: 'bold',
    justifyContent: 'center',
  },
});
