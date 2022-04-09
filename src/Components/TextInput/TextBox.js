import React from 'react';
import {
  TextInput,
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';

import color from '../../module/utils/color';
const TextBoxComponent = props => {
  return (
    <View style={styles.textinputview}>
      <TextInput
        placeholder={props.placeholder}
        style={styles.textinput}
        keyboardType={props.keyboardType}
        onFocus={props.onFocus}
        value={props.value}
        onChangeText={props.onChangeText}
        defaultValue={props.defaultValue}
        autoFocus={props.autoFocus}
        placeholderTextColor={'#3e3721'}
      />
      {/* {props.isicon ? (
        <TouchableOpacity
          style={{justifyContent: 'center'}}
          onPress={props.iconPress}>
          {props.icon ? (
            <Icon name={Iconlist.eyecross} size={30} style={{margin: '4%'}} />
          ) : (
            <Icon name={Iconlist.eyeopen} size={30} style={{margin: '4%'}} />
          )}
        </TouchableOpacity>
      ) : null} */}
    </View>
  );
};
export default TextBoxComponent;

const styles = StyleSheet.create({
  textinputview: {
    borderBottomWidth: 2,
    width: '90%',
    alignSelf: 'center',
    borderBottomColor: color.textinputbordercolor,
  },
  textinput: {
    fontSize: 18,
    width: '100%',
  },
});