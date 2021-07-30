import React  from  'react';
import { TextInput, View, Text, StyleSheet } from 'react-native';
import Colors from '../Colors';

const OtpBoxComponent = (props) => {

    return (
        <View style={styles.textinputview}>
            <TextInput
                placeholder={props.placeholder}
                ref={props.ref}
                style={styles.textinput}
                keyboardType={props.keyboardType}
                onChangeText={props.onChangeText}
                maxLength={1}
            />
        </View>
    );
};
export default OtpBoxComponent;

const styles = StyleSheet.create({
    textinputview: {
        borderWidth: 2,
        width: 60,
        alignSelf: 'center',
        borderColor: Colors.textinputbordercolor,
        borderRadius: 10,
        margin:'4%'
    },
    textinput: {
        fontSize: 18,
        alignSelf:'center'
    },
});
