import React, { Component, Fragment, useEffect, useState } from 'react';
import { Text, View, StyleSheet, TouchableOpacity, Button, Image, ScrollView,ActivityIndicator } from 'react-native';
import { showMessage, hideMessage } from 'react-native-flash-message';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/AntDesign';
import { useDispatch, useSelector } from 'react-redux';
import { authUser, buttonClick, cabinfo } from '../module/actions';
import CutomButton from '../Components/Button/Button';
import CustomTextInput from '../Components/TextInput/TextBox';
import CustomTextBoxLabel from '../Components/Label/TextBoxLabel'
import Colors from '../Components/Colors';
import Iconlist from '../Components/icon'
import images from '../Constants/image'
import { getButtonClick, getdriverId } from '../module/selectors/user';
const CabDetail = ({ props }) => {
    const navigation = useNavigation()
    const dispatch = useDispatch()
    const isclick = useSelector(getButtonClick)
    console.log(isclick)
    // const id_driver = useSelector(getdriverId)

     //id_driver
    const [ type_of_vechile, setTypeofVechile] = useState('')
    const [sheets, setSheets] = useState('')
    const [vechile_rc, setVechile_rc] = useState('')
    const [vechile_number, setVechile_number] = useState('')
    const [available_vans, setAvailable_vans] = useState('')
    const [car_model, setCar_model] = useState('')
    const onPressSaveButton=()=>{
     
    dispatch(buttonClick())
     dispatch(cabinfo(
         {  // const id_driver = useSelector(getdriverId)
            id_driver:38,
            type_of_vechile,
             sheets,
             vechile_rc,
             vechile_number,
             available_vans,
             car_model
        }
     ))
     navigation.navigate('uploaddoc')
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
                        label={'Type of Vechile'}
                    />
                </View>
                <CustomTextInput
                    placeholder={'Ex Mini Van'}
                    onChangeText={text => setTypeofVechile(text)}
                />
                <View style={{ width: '90%', alignSelf: 'center' }}>
                    <CustomTextBoxLabel
                        label={'Number of sheets -'}
                    />
                </View>
                <CustomTextInput
                    placeholder={'No of sheets in vechile '}
                    onChangeText={text => setSheets(text)}
                />
                <View style={{ width: '90%', alignSelf: 'center' }}>
                    <CustomTextBoxLabel
                        label={'Vechile Rc'}
                    />
                </View>
                <CustomTextInput
                    placeholder={'Vechile Rc '}
                    onChangeText={text => setVechile_rc(text)}
                />
                <View style={{ width: '90%', alignSelf: 'center' }}>
                    <CustomTextBoxLabel
                        label={'Vechile Number'}
                    />
                </View>
                <CustomTextInput
                    placeholder={'Vechile Number '}
                    onChangeText={text => setVechile_number(text)}
                />
                <View style={{ width: '90%', alignSelf: 'center' }}>
                    <CustomTextBoxLabel
                        label={'No of Available Vans'}
                    />
                </View>
                <CustomTextInput
                    placeholder={'Available Vans'}
                    onChangeText={text => setAvailable_vans(text)}
                />
                <View style={{ width: '90%', alignSelf: 'center' }}>
                    <CustomTextBoxLabel
                        label={'Car-Name/Model'}
                    />
                </View>
                <CustomTextInput
                    placeholder={'Car Name '}
                    onChangeText={text => setCar_model(text)}
                />
                <View>
                    <CutomButton
                      title={'Save & Next'}
                        textStyle={styles.buttontext}
                        onPress={() => { onPressSaveButton() }}

                    />
                </View>
                <View style={styles.forgetpasswordview}>
                    {/* <Text style={styles.forgetpasstext}>
            Forget Password?
          </Text>
          <Text style={styles.resettext}>
            Reset here
          </Text> */}
                </View>
            </View>

        </ScrollView>
        </Fragment>
    );
};

export default CabDetail;
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