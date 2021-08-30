import React, { useEffect, useState } from 'react';
import { Text, View, TouchableOpacity, StyleSheet, StatusBar } from 'react-native';
import FontAwesomeNab from 'react-native-vector-icons/Fontisto';
import { useNavigation } from '@react-navigation/native';
import iconlist from '../Components/icon';
import Geolocation from '@react-native-community/geolocation';
import MapView from 'react-native-maps';
import MapCompnet from '../Components/MapComponent'
import { useDispatch, useSelector } from 'react-redux';
import { getdriverId, getloginDriverid } from '../module/selectors';
import { updateDriverLocation } from '../module/actions';
import messaging from '@react-native-firebase/messaging';

const HomeScreen = (props) => {
    const navigation = useNavigation()
    const [current_lat, setCurrentLat] = useState(27.118730)
    const [current_long, setCurrentlong] = useState(81.974230)
    const id_driver = useSelector(getloginDriverid)
    console.log(id_driver)
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
      dispatch(updateDriverLocation({id_driver, current_lat,current_long}))
    }
    useEffect( async()=>{
      const   fcmToken = await messaging().getToken()
      console.log(fcmToken)
    },[])
    return (
        <View style={{ flex: 1 }}>
            <TouchableOpacity style={styles.upperview}
                onPress={() => { navigation.openDrawer() }}
            >
                <FontAwesomeNab
                    name={iconlist.navbaricon}
                    size={20}
                    style={{ marginLeft: '5%' }}
                />
            </TouchableOpacity>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                <Text style={{ fontSize: 20 }}>{current_lat}</Text>
                <Text style={{ fontSize: 20 }}>{current_long}</Text>
            </View>
            <View style={{ flex: 1 }}>
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
                        title={"Your Login jakjfdk"}
                        pinColor="green"
                    />
                </MapView>
            </View>
        </View>
    )
}
export default HomeScreen;
const styles = StyleSheet.create({
    upperview: {
        flex: 0.4,
        marginTop: StatusBar.currentHeight,
    },
    MainContainer: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0, alignItems: 'center',
        justifyContent: 'flex-end',
    },
    mapStyle: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
    },
})