import React, { useEffect, useState } from 'react';
import { Text, View, TouchableOpacity, Linking, StyleSheet, Platform, Dimensions, Image, StatusBar, Alert, Animated } from 'react-native';
import FontAwesomeNab from 'react-native-vector-icons/Fontisto';
import { useNavigation } from '@react-navigation/native';
import iconlist from '../Components/icon';
import Geolocation from '@react-native-community/geolocation';
import MapView from 'react-native-maps';
import MapCompnet from '../Components/MapComponent'
import { useDispatch, useSelector } from 'react-redux';
import CrossIcon from 'react-native-vector-icons/Entypo'
import { getBookingData, getdriverId, getloginDriverid } from '../module/selectors';
import { getAccetedDriverdata, saveNotificationUser, updateDriverLocation } from '../module/actions';
import messaging from '@react-native-firebase/messaging';
const { height, width } = Dimensions.get('window')
import Modal from 'react-native-modal';
import image from '../Constants/image';
const HomeScreen = (props) => {
    const navigation = useNavigation()
    const [current_lat, setCurrentLat] = useState(27.118730)
    const [current_long, setCurrentlong] = useState(81.974230)
    const id_driver = useSelector(getloginDriverid)
    const driver_id = useSelector(getloginDriverid)
    const userbooking_id = useSelector(getBookingData)
    const [userdropLat, SetuserdropLat] = useState(28.589029)
    const [userdropLng, SetuserdropLng] = useState(77.301613)
    const [isVisible, setIsVisiable] = useState(false)
    const animatedValue = new Animated.Value(0)


    const dispatch = useDispatch()
    const region = {
        latitude: 27.118730,
        longitude: 81.974230,
        latitudeDelta: 0.014,
        longitudeDelta: 0.015
    };
    const onChangeRegion = async () => {
        await Geolocation.getCurrentPosition(info => {

            setCurrentLat(info.coords.latitude)
            setCurrentlong(info.coords.longitude)
        })
        dispatch(updateDriverLocation({ id_driver, current_lat, current_long }))
    }
    useEffect(async () => {

        const fcmToken = await messaging().getToken()


    }, [])
    useEffect(() => {
        const unsubscribe = messaging().onMessage(async remoteMessage => {
            console.log(remoteMessage)
            SetuserdropLat(parseFloat(remoteMessage.data.drop_lat))
            SetuserdropLng(parseFloat(remoteMessage.data.drop_long))

            dispatch(saveNotificationUser(remoteMessage.data))
            setIsVisiable(true)

        });

        return unsubscribe
    }, [])

    const onCancelPress = () => {
        setIsVisiable(false)
        animatedView()


    }
    const openGps = () => {
        animatedViewHide()
        const scheme = Platform.select({ ios: 'maps:0,0?q=', android: 'geo:0,0?q=' });
        const latLng = `${userdropLat},${userdropLng}`;
        const label = 'Custom Label';
        const url = Platform.select({
            ios: `${scheme}${label}@${latLng}`,
            android: `${scheme}${latLng}(${label})`
        });
        Linking.openURL(url);
    }
    const onAcceptedPress = () => {
        animatedView()
        dispatch(getAccetedDriverdata({ driver_id, userbooking_id }))
        setIsVisiable(false)


    }
    const animatedView = () => {
        Animated.timing(animatedValue, {
            toValue: 1,
            duration: 600,
            useNativeDriver: true
        }).start();
    }
    const animatedViewHide = () => {
        Animated.timing(animatedValue, {
            toValue: 0,
            duration: 600,
            useNativeDriver: true
        }).start();
    }
    return (
        <>

            <MapView
                style={styles.mapStyle}
                showsUserLocation={true}
                showsMyLocationButton={true}
                zoomEnabled={false}
                onRegionChange={onChangeRegion}
                zoomControlEnabled={false}
                initialRegion={{
                    latitude: 28.579660,
                    longitude: 77.321110,
                    latitudeDelta: 0.0922,
                    longitudeDelta: 0.0421,
                }}>

                <MapView.Marker
                    draggable
                    coordinate={{ "latitude": parseFloat(current_lat), "longitude": parseFloat(current_long) }}

                    pinColor="red"
                />
            </MapView>
            <TouchableOpacity style={styles.navbarIcon}
                onPress={() => { navigation.openDrawer() }}
            >
                <FontAwesomeNab
                    name={'nav-icon-a'}
                    size={20}
                />
            </TouchableOpacity>
            <Modal
                isVisible={isVisible}

                style={{ flex: 1, justifyContent: 'flex-end' }}
            >
                <View style={styles.modalcontainre}>
                    <Text style={styles.textStyles}>New Booking Arrived</Text>
                    <View style={{ flexDirection: 'row', justifyContent: 'center', marginTop: 10 }}>
                        <TouchableOpacity style={styles.decline}
                            onPress={() => { onCancelPress() }}
                        >
                            <Text style={{ fontSize: 17, color: 'white', fontFamily: 'OpenSans-Bold' }}>Decline</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.accept}
                            onPress={() => { onAcceptedPress() }}
                        >
                            <Text style={{ fontSize: 17, color: 'white', fontFamily: 'OpenSans-Bold' }}>Accept</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </Modal>
            <View
                style={[styles.googleMapView]}
            >
                
                <TouchableOpacity
                    style={{ justifyContent: 'center', alignItems: 'center' }}
                    onPress={() => { openGps() }}
                >
                    <Image
                        source={image.googleMap}
                        resizeMode='contain'
                        style={{ height: '90%', width: '90%',justifyContent:'center' }}
                    />
                </TouchableOpacity>
            </View>

        </>

    )
}
export default HomeScreen
const styles = StyleSheet.create({


    mapStyle: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
    },
    navbarIcon: {
        height: 60,
        width: 60,
        borderRadius: 30,
        elevation: 5,
        backgroundColor: 'white',
        position: 'absolute',
        margin: 30,
        justifyContent: 'center',
        alignItems: 'center'
    },
    bottomView: {
        height: 100,
        width: '100%',
        backgroundColor: 'white',
        position: 'absolute',
        elevation: 5,

    },
    icomingtext: {
        fontSize: 15,
        alignSelf: 'center',
        fontFamily: 'OpenSans-Bold'

    },
    buttoncontainer: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginHorizontal: 30
    },
    cancleButton: {
        height: 50,
        width: 100,
        backgroundColor: 'red',
        borderRadius: 5,
        justifyContent: 'center',
        alignItems: 'center'
    },
    AcceptButton: {
        height: 50,
        width: 100,
        backgroundColor: 'green',
        borderRadius: 5,
        justifyContent: 'center',
        alignItems: 'center'
    },
    statusText: {
        fontSize: 16,
        color: 'white',
        fontFamily: 'OpenSans-Bold'
    },
    modalcontainre: {
        height: 130,
        width: width * 0.7,
        backgroundColor: 'white',
        alignSelf: 'center',
        borderRadius: 5,
        justifyContent: 'center'
    },
    textStyles: {
        fontSize: 17,
        alignSelf: 'center',
        fontFamily: 'OpenSans-Bold',
        marginTop: 10
    },
    decline: {
        height: 40,
        width: 100,
        backgroundColor: 'red',
        borderRadius: 4,
        alignItems: 'center',
        justifyContent: 'center',

    },
    accept: {
        height: 40,
        width: 100,
        backgroundColor: 'green',
        borderRadius: 4,
        alignItems: 'center',
        justifyContent: 'center',
        marginLeft: 30

    },
    googleMapView: {
        height:60, 
        width: 60,
        elevation:5,
        borderRadius:60,
        backgroundColor: 'white',
       
        position: 'absolute', 
        top:height-100,
        left:width-100,
        
    }
})