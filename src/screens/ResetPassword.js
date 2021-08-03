import React, { Component, useEffect, useState } from 'react';
import { Text, View, StyleSheet, TouchableOpacity, Button, Image, ScrollView, Dimensions } from 'react-native';
import { showMessage, hideMessage } from 'react-native-flash-message';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/AntDesign';

import { useDispatch } from 'react-redux';
import { authUser, signUpUser } from '../module/actions';
import CutomButton from '../Components/Button/Button';
import CustomTextInput from '../Components/TextInput/TextBox';
import CustomTextBoxLabel from '../Components/Label/TextBoxLabel'
import Colors from '../Components/Colors';
import Iconlist from '../Components/icon'
import Geolocation from '@react-native-community/geolocation';
import { WebView } from 'react-native-webview';
let { height, width } = Dimensions.get('window')

import images from '../Constants/image'
import { currentLocation } from '../module/utils/Apis/currentLatLong'
const ResetPassword = ({ props }) => {

    const navigation = useNavigation()
    const dispatch = useDispatch()
    const [isok, setIsOk] = useState(true)
    const [secure,setSecure] = useState(true)
    console.log(height, width)
    const onLoginPress = async () => {

    }

    const onReset = () => {
        return <WebView source={{ uri: 'https://reactnative.dev/' }} />;
    }
    console.log(secure)
    return (
        <ScrollView
            contentContainerStyle={{ flexGrow: 1, justifyContent: 'center' }}
        >
            <TouchableOpacity style={{ flex: 0.1 }}
                onPress={() => { navigation.goBack() }}

            >
                <Icon
                    name={Iconlist.arrowleft}
                    size={30}
                    style={{ margin: '4%' }}
                />
            </TouchableOpacity>
            <View style={{

                flex: 0.5
            }}>
                {isok && <View style={styles.messageview}>
                    <Text style={styles.resettext}>Now you can reset you password </Text>
                    <TouchableOpacity
                        style={styles.crossbutton}
                        onPress={() => { setIsOk(false) }}
                    >
                        <Text style={{ fontSize: 16, color: 'white' }}>Ok </Text>
                    </TouchableOpacity>
                </View>}
            </View>

            <View style={{ flex: 1 }}>
                <View style={{ width: '90%', alignSelf: 'center' }}>
                    <CustomTextBoxLabel
                        label={'Email'}
                    />
                </View>
                <CustomTextInput
                    placeholder={'Email'}
                />
                <View style={{ width: '90%', alignSelf: 'center' }}>
                    <CustomTextBoxLabel
                        label={'Enter New Password'}
                    />
                </View>
                <CustomTextInput
                    placeholder={'New Password'}
                    secureTextEntry={secure}
                    isicon={true}
                    icon={secure}
                   iconPress={()=>{setSecure(!secure)}}
                />

                <View>
                    <CutomButton
                        title={'Reset'}
                        textStyle={styles.buttontext}
                        onPress={() => { onLoginPress() }}

                    />
                </View>

            </View>

        </ScrollView>
    );
};

export default ResetPassword;
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
        fontFamily: 'OpenSans-Bold',

    },
    messageview: {

        width: '90%',
        backgroundColor: 'white',
        margin: 10,
        padding: 20,
        borderRadius: 10,
        shadowColor: '#000',
        shadowOffset: { width: 0.5, height: 0.5 },
        shadowOpacity: 0.5,
        shadowRadius: 3,
        elevation: 5,
        alignSelf: 'center',
        flexDirection: 'row',


    },
    crossbutton: {

        color: 'blue',
        position: 'absolute',
        left: '101%',
        backgroundColor: Colors.resesttTextColor,
        alignSelf: 'center',
        justifyContent: 'center',
        alignItems: 'center',
        height: 50,
        width: 50,
        borderRadius: 25


    }
});