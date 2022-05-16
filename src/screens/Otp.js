import React, { Component, useState, useRef } from "react";
import {
  Text,
  View,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  ActivityIndicator,
  Image,
} from "react-native";
import Icon from "react-native-vector-icons/AntDesign";
import { useNavigation } from "@react-navigation/native";
import { getPhoneNumber, getPhoneNumberdata } from "../module/selectors";
import { useSelector } from "react-redux";
import Iconlist from "../Components/icon";
import Allimage from "../Constants/image";
import Colors from "../Components/Colors";
import CustomTextInput from "../Components/TextInput/OtpBox";
import CustomTextBoxLabel from "../Components/Label/TextBoxLabel";
import CutomButton from "../Components/Button/Button";
import TextBoxComponent from "../Components/TextInput/TextBox";
import BackgroundImage from "../Components/BackgroundImage/BackgroundImage";
const OtpScreen = () => {
  const [otp1, setOtp1] = useState("");
  const [otp2, setOtp2] = useState("");
  const [otp3, setOtp3] = useState("");
  const [otp4, setOtp4] = useState("");
  const navigation = useNavigation();
  const phonenumber = useSelector(getPhoneNumberdata);

  const confirmVerificationCode = () => {
    if (phonenumber.otp == otpverify) {
      showMessage({
        message: "Simple message",
        type: "success",
      });
      setOtp("");
      navigation.navigate("Registration");
    } else {
      showMessage({
        message: "incorrect otp",
        type: "danger",
      });
    }
  };
  const onsubmit = () => {
    //  if(parseInt(otp1+otp2+otp3+otp4)===phonenumber.payload.otp){
    navigation.navigate("registration");
    //  }
  };
  return (
    <BackgroundImage>
      <ScrollView contentContainerStyle={{ flex: 1 }}>
        <TouchableOpacity
          style={{ flex: 0.3 }}
          onPress={() => {
            navigation.goBack();
          }}
        >
          <Icon name={Iconlist.arrowleft} size={30} style={{ margin: "4%" }} />
        </TouchableOpacity>
        <View
          style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
        >
          <Image
            source={Allimage.mobilephone}
            resizeMode="contain"
            style={{ height: "40%", width: "90%" }}
          />
          <Text style={styles.mobiletext}>OTP VERIFICATION</Text>
          {/* <Text style={styles.otpText}>{`Enter OTP sent to +91-${phonenumber.payload.phonenumber}`}</Text> */}
        </View>
        <View style={{ flex: 1 }}>
          <View style={{ flexDirection: "row", justifyContent: "center" }}>
            <TextBoxComponent />
          </View>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "center",
              margin: "5%",
            }}
          >
            <Text style={styles.otpText}>Didn't receive the OTP ?</Text>
            <TouchableOpacity>
              <Text style={styles.resendotp}>Resend OTP </Text>
            </TouchableOpacity>
          </View>
          <View style={{ justifyContent: "center",
           alignItems: "center",  }}>
            <CutomButton
              title={"Submit"}
              textStyle={styles.buttontext}
              onPress={() => {
                onsubmit();
              }}
            />
          </View>
        </View>
      </ScrollView>
    </BackgroundImage>
  );
};

export default OtpScreen;

const styles = StyleSheet.create({
  buttontext: {
    fontSize: 20,
    color: "white",
    alignSelf: "center",
    fontWeight: "bold",
    justifyContent: "center",
  },
  mobiletext: {
    fontSize: 18,
    fontFamily: "OpenSans-Light",
    margin: "2%",
  },
  otpText: {
    fontSize: 18,
    color: Colors.forgetPassowrdcolor,
    fontFamily: "OpenSans-Bold",
  },
  resendotp: {
    fontSize: 18,
    color: Colors.resesttTextColor,
    fontFamily: "OpenSans-Bold",
  
  },

});
