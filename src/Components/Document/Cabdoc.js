import React from 'react';
import { Text,View,StyleSheet,Image } from 'react-native';
import Icon from 'react-native-vector-icons/Entypo';

const CabdocComponent =({data})=>{
    console.log(data.uri)
    return(
        <View style={styles.docview}>
        {data?null:<Icon name="text-document-inverted" size={70} color="black" style={styles.documenticon} />}
        
        <Image 
         source={{uri:data.uri}}
         resizeMode='contain'
         style={{height:'30%',width:'100%'}}
        />
        </View>
    )
}
export default CabdocComponent;
const styles = StyleSheet.create({
    docview:{
        backgroundColor:'#d6d6d6',
        justifyContent:'center'
      
    },
    documenticon:{
        justifyContent:'center',
        alignSelf:'center'

    }
})