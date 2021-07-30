import React, { Fragment, useState } from 'react';
import { Text, View, TouchableOpacity, StyleSheet, ActivityIndicator } from 'react-native';
import CabdocComponent from '../../Components/Document/Cabdoc';
import Iconlist from '../../Components/icon'
import Icon from 'react-native-vector-icons/AntDesign';
import CustomButton from '../../Components/Button/Button';
import { useNavigation } from '@react-navigation/core';
import ImagePicker from 'react-native-image-picker';
import { documentButtonClick, drivingLicense, profilPhoto, uploddocfaild } from '../../module/actions';
import { useDispatch, useSelector } from 'react-redux';
import { geDocButtonClick } from '../../module/selectors';
const options = {
    title: 'Profile Picture',
    takePhotoButtonTitle: 'Take photo with your camera',
    chooseFromLibraryButtonTitle: 'Choose photo from library',

};
const DriverLicense = () => {
    const dispatch = useDispatch()
    const [ImageUrl, setImageurl] = useState('')
    const isbuttonClick = useSelector(geDocButtonClick)
    console.log(isbuttonClick)
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
                setImageurl(source)
                let imagedata = {
                    name: 'license_img',
                    filename: response.fileName,
                    type: 'image/png',
                    data: response.data,
                }
                dispatch(drivingLicense(imagedata))


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
                <Text style={styles.labelText}>Upload Driving License</Text>
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
export default DriverLicense;
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