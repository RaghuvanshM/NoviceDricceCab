import React from 'react';
import { Text,View,StyleSheet,Image } from 'react-native';
import Icon from 'react-native-vector-icons/Entypo';

const CabdocComponent =({data})=>{
    console.log(data)
    return(
        <View style={styles.docview}>
        <Icon name="text-document-inverted" size={70} color="black" style={styles.documenticon} />
        {/* <Image 
         source={{uri:data.uri}}
        /> */}
        </View>
    )
}
export default CabdocComponent;
const styles = StyleSheet.create({
    docview:{
        backgroundColor:'#d6d6d6',
        padding:'20%'
    },
    documenticon:{
        justifyContent:'center',
        alignSelf:'center'

    }
})