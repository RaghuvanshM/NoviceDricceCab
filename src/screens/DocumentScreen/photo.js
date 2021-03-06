import React, { Fragment, useEffect, useState } from 'react';
import { Text, View, TouchableOpacity, StyleSheet, ActivityIndicator } from 'react-native';
import CabdocComponent from '../../Components/Document/Cabdoc';
import Iconlist from '../../Components/icon'
import Icon from 'react-native-vector-icons/AntDesign';
import CustomButton from '../../Components/Button/Button';
import { useNavigation } from '@react-navigation/core';
import ImagePicker from 'react-native-image-picker';
import { documentButtonClick, profilPhoto, uploddocfaild } from '../../module/actions';
import { useDispatch, useSelector } from 'react-redux';
import { geDocButtonClick, getdriverId } from '../../module/selectors';
import Toast from 'react-native-toast-message';
import { profileImageUpload } from '../../module/saga/profilephoto';

const options = {
    title: 'Profile Picture',
    takePhotoButtonTitle: 'Take photo with your camera',
    chooseFromLibraryButtonTitle: 'Choose photo from library',

};
const Photo = () => {
    const dispatch = useDispatch()
    const [ImageUrl, setImageurl] = useState('')
    const isbuttonClick = useSelector(geDocButtonClick)
    const id_driver = useSelector(getdriverId)
    useEffect(()=>{
        dispatch(uploddocfaild())
    },[])
    console.log(id_driver)
    const onChoosePhotoClick = () => {
        dispatch(documentButtonClick())
        ImagePicker.showImagePicker(options, (response) => {
            if (response.didCancel) {
                dispatch(uploddocfaild())
            } else if (response.error) {
                dispatch(uploddocfaild())
            } else if (response.customButton) {
                dispatch(uploddocfaild())
            } else {
                let source = { uri: response.uri };
                if (response.type === 'image/jpeg' || response.type === 'image/jpg' || response.type === 'image/png') {
                    console.log(source)
                    setImageurl(source)
                    let imagedata = {
                        name: 'profile_picture',
                        filename: response.fileName,
                        type: 'image/png',
                        data: response.data,
                    }
                    let id ={
                        name: 'id_driver', data:id_driver
                    }
                
              
                }
                else {
                    Toast.show({
                        type: 'error',
                        text1: 'Please Choose Correct Image',
                        visibilityTime: 30000,
                        position: 'bottom',
                    });
                    dispatch(uploddocfaild())
                }


              


            }
        })
    }
    const navigation = useNavigation()
    return (
        <Fragment>
            {isbuttonClick && (
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
            <View style={{ flex: 1 }}>
                <TouchableOpacity style={{ flex: 0.1 }}
                    onPress={() => { navigation.goBack() }}
                >
                    <Icon
                        name={Iconlist.arrowleft}
                        size={30}
                        style={{ margin: '4%' }}
                    />
                </TouchableOpacity>
                <Text style={styles.labelText}>Upload Profile Picture</Text>
                <View style={{ flex: 0.7, justifyContent: 'center' }}>
                    <CabdocComponent
                        data={ImageUrl}
                    />
                    <View style={{ marginTop: '5%' }}>
                        <CustomButton
                            title={'Choose/Take Photo'}
                            textStyle={styles.buttontext}
                            onPress={() => onChoosePhotoClick()}
                        />
                    </View>
                </View>

            </View>
        </Fragment>
    )
}
export default Photo;
const styles = StyleSheet.create({
    buttontext: {
        fontSize: 20,
        color: 'white',
        alignSelf: 'center',
        fontWeight: 'bold',
        justifyContent: 'center',
    },
    labelText: {
        fontSize: 18,
        fontFamily: 'OpenSans-Bold',
        alignSelf: 'center'
    }
})