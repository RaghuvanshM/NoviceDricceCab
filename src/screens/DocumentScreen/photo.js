import React, { Fragment, useEffect, useState } from "react";
import {
  Text,
  View,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
  ActivityIndicator,
} from "react-native";
import CabdocComponent from "../../Components/Document/Cabdoc";
import Iconlist from "../../Components/icon";
import Icon from "react-native-vector-icons/AntDesign";
import CustomButton from "../../Components/Button/Button";
import { useNavigation } from "@react-navigation/core";
import ImagePicker from "react-native-image-picker";

import { useDispatch } from "react-redux";

import AsyncStorage from "@react-native-community/async-storage";
import RNFetchBlob from "rn-fetch-blob";
import Toast from "react-native-toast-message";

const options = {
  title: "Profile Picture",
  takePhotoButtonTitle: "Take photo with your camera",
  chooseFromLibraryButtonTitle: "Choose photo from library",
};
const Photo = () => {
  const dispatch = useDispatch();
  const [ImageUrl, setImageurl] = useState("");
  const myfun = () => {
    ImagePicker.showImagePicker(options, (response) => {
      console.log(response);
      if (response.didCancel) {
      } else if (response.error) {
      } else {
        let source = { uri: response.uri };
        setImageurl(source);
        AsyncStorage.getItem("Loginid").then((token) => {
          RNFetchBlob.fetch(
            "POST",
            "https://novice.jingleinfo.com/novicecabnew/mobileapp/Driver/profil_image",
            {
              Authorization: "Bearer access-token",
              otherHeader: "foo",
              "Content-Type": "multipart/form-data",
              "x-api-key": "prabhat@cab",
            },
            [
              {
                name: "profile_picture",
                filename: response.fileName,
                type: "image/png",
                data: response.data,
              },
              { name: "id_driver", data: String(12) },
            ]
          ).then((resp) => {
            Toast.show({
              type: "success",
              text1: "Image Upload sucess fully",
              visibilityTime: 3000,
              position: "bottom",
            });
          });
        });
        // this.setState({
        //   imageSource: source,
        //   pic: response.data,
        //   name: response.fileName,
        //   isSelect: true,
        // });
      }
    });
  };
  const uploadPic = () => {};
  const navigation = useNavigation();
  return (
    <Fragment>
      <View style={{ flex: 1 }}>
        <TouchableOpacity
          style={{ flex: 0.1 }}
          onPress={() => {
            navigation.goBack();
          }}
        >
          <Icon name={Iconlist.arrowleft} size={30} style={{ margin: "4%" }} />
        </TouchableOpacity>
        <Text style={styles.labelText}>Upload Profile Picture</Text>
        <View style={{ flex: 0.7, justifyContent: "center" }}>
          <CabdocComponent data={ImageUrl} />
          <View style={{ alignItems: "center", marginTop: 30 }}>
            <CustomButton
              title={"Choose/Take Photo"}
              textStyle={styles.buttontext}
              onPress={() => myfun()}
              isfullWidh={true}
            />
          </View>
        </View>
      </View>
    </Fragment>
  );
};
export default Photo;
const styles = StyleSheet.create({
  buttontext: {
    fontSize: 20,
    color: "white",
    alignSelf: "center",
    fontWeight: "bold",
    justifyContent: "center",
  },
  labelText: {
    fontSize: 18,
    fontFamily: "OpenSans-Bold",
    alignSelf: "center",
  },
});
