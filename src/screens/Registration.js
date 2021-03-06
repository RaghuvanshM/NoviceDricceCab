import React, { Component, Fragment, useEffect, useState } from 'react';
import { View, StyleSheet, TouchableOpacity, ActivityIndicator, Image, ScrollView } from 'react-native';
import { showMessage, hideMessage } from 'react-native-flash-message';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/AntDesign';

import { useDispatch, useSelector } from 'react-redux';
import { authUser, buttonClick, signUpUser } from '../module/actions';
import CutomButton from '../Components/Button/Button';
import CustomTextInput from '../Components/TextInput/TextBox';
import CustomTextBoxLabel from '../Components/Label/TextBoxLabel'
import Colors from '../Components/Colors';
import Iconlist from '../Components/icon'
import images from '../Constants/image';
import messaging from '@react-native-firebase/messaging';
import Toast from 'react-native-toast-message';
import { getButtonClick, getdriverId, getisUserDetail, getUserProfile } from '../module/selectors/user';
const Registration = ({ props }) => {
    const dispatch = useDispatch();
    const isclick = useSelector(getButtonClick)
    const alredyuser = useSelector(getisUserDetail)

    const navigation = useNavigation()
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [mobile, setMobile] = useState('')
    const [password, setPassword] = useState('')
    const [address, setAddress] = useState('')
    const [pincode, setPincode] = useState('')
    const [license, setLicenseNo] = useState('')
    const [pan_card, setPancardno] = useState('')
    const [bank_name, setBankeName] = useState('')
    const [bank_account, setAccountNo] = useState('')
    const [ifsc_code, setIfscCode] = useState('')
    const [device_id, setDeviceId] = useState('')
    useEffect(async () => {
        fcmToken = await messaging().getToken()
        setDeviceId(fcmToken)
   
    }, [])
    useEffect(()=>{
      
        if (alredyuser) {
            navigation.navigate('cabdetails')
        }
    },[alredyuser])
    const onPressSaveButton = async () => {

        dispatch(buttonClick())
        dispatch(signUpUser(
            {
                name,
                email,
                mobile,
                password,
                address,
                pincode,
                license,
                pan_card,
                bank_name,
                bank_account,
                ifsc_code,
                device_id
            }))
       
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
                <TouchableOpacity style={{ flex: 0 }}
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
                            label={'Enter Name'}
                        />
                    </View>
                    <CustomTextInput
                        placeholder={'Name'}
                        // onChange={(text)=>setName({name:text})}
                        onChangeText={text => setName(text)}
                        value={name}

                    />
                    <View style={{ width: '90%', alignSelf: 'center' }}>
                        <CustomTextBoxLabel
                            label={'Enter Email'}

                        />
                    </View>
                    <CustomTextInput
                        placeholder={'Email '}
                        onChangeText={text => setEmail(text)}
                        value={email}

                    />
                    <View style={{ width: '90%', alignSelf: 'center' }}>
                        <CustomTextBoxLabel
                            label={'Enter Phone'}
                        />
                    </View>
                    <CustomTextInput
                        placeholder={'Phone '}
                        onChangeText={text => setMobile(text)}
                        keyboardType={'number-pad'}
                        maxLength={10}
                        value={mobile}
                    />
                    <View style={{ width: '90%', alignSelf: 'center' }}>
                        <CustomTextBoxLabel
                            label={'Create Password'}
                            
                        />
                    </View>
                    <CustomTextInput
                        placeholder={'Password '}
                        onChangeText={text => setPassword(text)}
                        value={password}

                    />
                    <View style={{ width: '90%', alignSelf: 'center' }}>
                        <CustomTextBoxLabel
                            label={'Enter Address'}
                        />
                    </View>
                    <CustomTextInput
                        placeholder={'Address '}
                        onChangeText={text => setAddress(text)}
                        value={address}

                    />
                    <View style={{ width: '90%', alignSelf: 'center' }}>
                        <CustomTextBoxLabel
                            label={'Enter Pincode'}
                            keyboardType={'number-pad'}
                        />
                    </View>
                    <CustomTextInput
                        placeholder={'Picode '}
                        onChangeText={text => setPincode(text)}
                        value={pincode}

                    />
                    <View style={{ width: '90%', alignSelf: 'center' }}>
                        <CustomTextBoxLabel
                            label={'Enter License No'}
                        />
                    </View>
                    <CustomTextInput
                        placeholder={'License No '}
                        onChangeText={text => setLicenseNo(text)}
                        value={license}

                    />
                    <View style={{ width: '90%', alignSelf: 'center' }}>
                        <CustomTextBoxLabel
                            label={'Enter Pan-Card  No'}

                        />
                    </View>
                    <CustomTextInput
                        placeholder={'Pan-No '}
                        onChangeText={text => setPancardno(text)}
                        value={pan_card}

                    />
                    <View style={{ width: '90%', alignSelf: 'center' }}>
                        <CustomTextBoxLabel
                            label={'Enter Bank Name'}
                        />
                    </View>
                    <CustomTextInput
                        placeholder={'Bank Name '}
                        onChangeText={text => setBankeName(text)}
                        value={bank_name}

                    />
                    <View style={{ width: '90%', alignSelf: 'center' }}>
                        <CustomTextBoxLabel
                            label={'Enter Account No'}
                        />
                    </View>
                    <CustomTextInput
                        placeholder={'Account Number '}
                        onChangeText={text => setAccountNo(text)}
                        keyboardType={'number-pad'}
                        value={bank_account}

                    />
                    <View style={{ width: '90%', alignSelf: 'center' }}>
                        <CustomTextBoxLabel
                            label={'Enter IFSC CODE'}
                        />
                    </View>
                    <CustomTextInput
                        placeholder={'IFSC CODE '}
                        onChangeText={text => setIfscCode(text)}
                        value={ifsc_code}

                    />
                    <View>
                        <CutomButton
                            title={'Save & Next'}
                            textStyle={styles.buttontext}
                            onPress={() => { onPressSaveButton() }}

                        />
                    </View>
                    <View style={styles.forgetpasswordview}>

                    </View>
                </View>

            </ScrollView>
        </Fragment>
    );
};

export default Registration;
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