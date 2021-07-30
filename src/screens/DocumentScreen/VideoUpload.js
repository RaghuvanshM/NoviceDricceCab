import React, { Fragment, useState } from 'react';
import { Text, View, TouchableOpacity, StyleSheet, ActivityIndicator } from 'react-native';
import CabdocComponent from '../../Components/Document/Cabdoc';
import Iconlist from '../../Components/icon'
import Icon from 'react-native-vector-icons/AntDesign';
import CustomButton from '../../Components/Button/Button';
import { useNavigation } from '@react-navigation/core';
import ImagePicker from 'react-native-image-picker';
import { AadhraImage, cabvideoUpload, documentButtonClick, uploadCabImage, uploddocfaild } from '../../module/actions';
import { useDispatch, useSelector } from 'react-redux';
import { geDocButtonClick } from '../../module/selectors';
import RNFetchBlob from 'rn-fetch-blob';
const options = {
    title: 'Cab Video',
    takePhotoButtonTitle: 'Take Video with your camera',
    chooseFromLibraryButtonTitle: 'Choose Video from library',
    mediaType: 'video',
    storageOptions: {
        skipBackup: true,
        path: 'images'
    }
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
                console.log(response)
                let imagedata = {
                    name: 'cab_video',
                    filename: 'vid.mp4',
                    data: RNFetchBlob.wrap(response.uri)
                }
                dispatch(cabvideoUpload(imagedata))
            }
        })
    }
    const navigation = useNavigation()
    return (
        <Fragment>
            {/* {isbuttonClick && (
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
            )} */}
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
                <Text style={styles.labelText}>Upload Cab Video</Text>
                <View style={{ flex: 0.7, justifyContent: 'center' }}>
                    <CabdocComponent
                        data={ImageUrl}
                    />
                    <View style={{ marginTop: '5%' }}>
                        <CustomButton
                            title={'Choose/Take Video'}
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