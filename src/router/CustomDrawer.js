import React from 'react';
import { Text, View, SafeAreaView, StyleSheet, Image,Pressable } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Colors from '../Components/Colors';
import FontAwesomeicon from 'react-native-vector-icons/Ionicons';
import iconlist from '../Components/icon';
import DrawerContentText from '../Components/Label/DrawerContentLable';
import { useDispatch, useSelector } from 'react-redux';
import { getUserProfile } from '../module/selectors';
import { signOutUser } from '../module/actions';

const CustomeContent = (props) => {
    const navigation = useNavigation();
   const dispatch = useDispatch()
  const onSignOutPress=()=>{
      alert('hello')
      dispatch(signOutUser())
   }
    return (
        <SafeAreaView style={{ flex: 1 }}>
            <Pressable style={{ flex: 0.3, backgroundColor: Colors.sidbardbackgroundcolor }}
           onPress={()=>{navigation.navigate('profile')}}
            >
                <View style={styles.nameview}>
                <FontAwesomeicon
                            name={iconlist.person}
                            color='#c2c2c2'
                            style={{ alignSelf: 'center' }}
                            size={40}
                        />
                        <View style={{ justifyContent: 'center', marginLeft: '6%' }}>
                        <Text
                            numberOfLines={1}
                            style={styles.personname}>{'Raghuvansh Mani Mishra'}</Text>
                            </View>
                    {/* <View style={styles.imageview}>
                        {profile.user.isAuth ? <Image
                            source={{ uri: profile.user.profile.photo }}
                            resizeMode='contain'
                            style={{ height: 60, width: 60, borderRadius: 30 }}
                        /> : <FontAwesomeicon
                            name={iconlist.person}
                            color='#c2c2c2'
                            style={{ alignSelf: 'center' }}
                            size={40}
                        />}
                    </View> */}
                    {/* <View style={{ justifyContent: 'center', marginLeft: '6%' }}>
                        {profile.user.isAuth ? <Text
                            numberOfLines={1}
                            style={styles.personname}>{profile.user.profile.name}</Text> : null
                        }
                    </View> */}
                </View>
                <View style={styles.bottomline} />

            </Pressable>
            <DrawerContentText
                title={'Feedback'}

            />
            <DrawerContentText
                title={'Contact Us'}

            />
            <DrawerContentText
                title={'Help'}

            />
            <DrawerContentText
                title={'Support'}

            />
            <DrawerContentText
                title={'Last booking'}

            />
           <DrawerContentText
                title={'Log Out'}
                onPress={()=>{onSignOutPress()}}
            />
        </SafeAreaView>
    )
}
export default CustomeContent;

const styles = StyleSheet.create({
    imageview: {
        height: 60,
        width: 60,
        backgroundColor: Colors.imageviewcolor,
        borderRadius: 40,
        justifyContent: 'center',
    },
    personname: {
        fontSize: 20,
        color: Colors.drawertext,
        fontWeight: 'bold',
        width:'80%'
    },
    nameview:
    {
        flexDirection: 'row',
        marginTop: '10%', marginLeft: '3%',

    },
    bottomline: {
        borderBottomWidth: 2,
        borderBottomColor: Colors.stripline,
        flex: 0.1
    }

})