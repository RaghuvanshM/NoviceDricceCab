import React from 'react';
import { Text, View, TouchableOpacity, StyleSheet, StatusBar } from 'react-native';
import FontAwesomeNab from 'react-native-vector-icons/Fontisto';
import { useNavigation } from '@react-navigation/native';
import iconlist from '../Components/icon';
const HomeScreen = (props) => {
    const navigation = useNavigation()
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
        </View>
    )
}
export default HomeScreen;
const styles = StyleSheet.create({
    upperview: {
        flex: 0.4,
        marginTop: StatusBar.currentHeight,
    },
})