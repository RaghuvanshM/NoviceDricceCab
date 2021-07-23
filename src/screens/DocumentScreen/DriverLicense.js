import React from 'react';
import { Text, View, TouchableOpacity, StyleSheet } from 'react-native';
import CabdocComponent from '../../Components/Document/Cabdoc';
import Iconlist from '../../Components/icon'
import Icon from 'react-native-vector-icons/AntDesign';
import CustomButton from '../../Components/Button/Button';
import { useNavigation } from '@react-navigation/core';
const DriverLicense = () => {
    const navigation = useNavigation()
    return (
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
                <CabdocComponent />
                <View style={{ marginTop: '5%' }}>
                    <CustomButton
                        title={'Choose/Take Photo'}
                        textStyle={styles.buttontext}
                    />
                </View>
            </View>

        </View>
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