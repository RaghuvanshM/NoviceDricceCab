import React, { useEffect, useState } from 'react';
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  ActivityIndicator,
  Image,
  ScrollView
} from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { buttonClick, mobileAuth, phoneAuth, sendOtp } from '../module/actions';

import Icon from 'react-native-vector-icons/AntDesign';
import { useNavigation } from '@react-navigation/native';
import Iconlist from '../Components/icon';
import CustomTextInput from '../Components/TextInput/TextBox';
import CustomTextBoxLabel from '../Components/Label/TextBoxLabel'
import CutomButton from '../Components/Button/Button';
import images from '../Constants/image';
import Colors from '../Components/Colors';
import { mobileNumber } from '../Constants/appConstant';
import Toast from 'react-native-toast-message';
import { getApifailed, getButtonClick, getPhoneNumber, getPhoneNumberdata } from '../module/selectors';
import { Fragment } from 'react';

const OtpScreen = () => {
  const dispatch = useDispatch();
  const navigation = useNavigation();
  // const phonedata = useSelector(getPhoneNumberdata)
  // console.log(phonedata)
  const [phone, setPhone] = useState('');
  // useEffect(() => {
  //   dispatch(phoneAuth);
  // }, [dispatch]);
  const apifalied = useSelector(getApifailed)
  const isclick = useSelector(getButtonClick)
  console.log(isclick)

  const validatePhone = () => {
    return mobileNumber.test(phone);
  };
  const sendOtpbuttoncall = async () => {
    navigation.navigate('otpverificatonscreen')
    if (validatePhone()) {
      navigation.navigate('otpverificatonscreen')
      dispatch(buttonClick())
      var val = await Math.floor(1000 + Math.random() * 9000);
      let data = { phonenumber: phone, otp: val }
   
     await  dispatch(mobileAuth(data))
      if(apifalied){
        navigation.navigate('otpverificatonscreen')
      }else{
        navigation.navigate('otpverificatonscreen')
        setPhone('')
      }
    }
    else {
      Toast.show({
        type: 'error',
        text1:  'Enter Correct Mobile Number',
        visibilityTime: 3000,
        position: 'bottom',
      });
    }

    // navigation.navigate('otpverificatonscreen')
    // try {
    //   if (validatePhone()) {
    //     var val = await Math.floor(1000 + Math.random() * 9000);
    //     const url = `http://2factor.in/API/V1/fce9a032-d8c4-11eb-8089-0200cd936042/SMS/${phone}/${val}`;
    //     await fetch(url, {/SMS/${phone}/${val}`;
    //     await fetch(url, {
    //       method: 'GET',
    //       headers: {
    //         'Content-Type': 'application/json',
    //       },
    //     })
    //       .then(res => res.json())
    //       .then(res2 => {
    //         console.log(res2.Status === 'Success');
    //         if (res2.Status === 'Success') {
    //           navigation.navigate('Otpverify');
    //           let data = {phonenumber: phone, otp: val};
    //           dispatch(sendOtp(data));
    //         }
    //       });
    //   } else {
    //     navigation.navigate('Otpverify');

    //   }
    // } catch (e) {
    //   console.log(e);
    // }
  };
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
    <ScrollView contentContainerStyle={{ flexGrow: 1, justifyContent: 'center' }}>
      <TouchableOpacity style={{ flex: 0.3 }}
        onPress={() => { navigation.goBack() }}
      >
        <Icon
          name={Iconlist.arrowleft}
          size={30}
          style={{ margin: '4%' }}
        />
      </TouchableOpacity>
      <View
        style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}
      >
        <Image
          source={images.mobilephone}
          resizeMode='contain'
          style={{ height: '40%', width: '90%' }}
        />
        <Text style={styles.mobiletext}>Enter Your Mobile Number</Text>
        <Text style={styles.otpText}>We will send you a OTP Verification</Text>
      </View>
      <View style={{ flex: 1 }}>
        <View style={{ width: '90%', alignSelf: 'center' }}>
          <CustomTextBoxLabel
            label={'Enter Mobile Number'}
          />
        </View>
        <CustomTextInput
          placeholder={'Phone Number'}
          keyboardType={'number-pad'}
          maxLength={10}
          onChangeText={text => setPhone(text)}
          value={phone}
        />
        <View>
          <CutomButton
            title={'Send'}
            textStyle={styles.buttontext}
            onPress={sendOtpbuttoncall}
          />
        </View>
      </View>
    </ScrollView>
    </Fragment>
  );
};
export default OtpScreen;
const styles = StyleSheet.create({
  singletextinput: {
    width: '95%',
    alignSelf: 'center',
    marginTop: '3%',
  },
  textlabel: {
    fontSize: 18,
    marginLeft: '2%',
  },
  linearGradient: {
    padding: 10,
    width: '90%',
    marginTop: '5%',
    alignSelf: 'center',
  },
  buttontext: {
    fontSize: 20,
    color: 'white',
    alignSelf: 'center',
    fontWeight: 'bold',

    justifyContent: 'center',
  },
  mobiletext: {
    fontSize: 18,
    fontFamily: 'OpenSans-Light',
    margin: '2%'
  },
  otpText: {
    fontSize: 18,
    color: Colors.forgetPassowrdcolor,
    fontFamily: 'OpenSans-Bold'
  }

});
