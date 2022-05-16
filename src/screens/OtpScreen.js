import React, { useEffect, useState } from "react";
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  ActivityIndicator,
  Image,
  ScrollView,
} from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { buttonClick, mobileAuth, phoneAuth, sendOtp } from "../module/actions";

import Icon from "react-native-vector-icons/AntDesign";
import { useNavigation } from "@react-navigation/native";
import Iconlist from "../Components/icon";
import CustomTextInput from "../Components/TextInput/TextBox";
import CustomTextBoxLabel from "../Components/Label/TextBoxLabel";
import CutomButton from "../Components/Button/Button";
import images from "../Constants/image";
import Colors from "../Components/Colors";
import { mobileNumber } from "../Constants/appConstant";
import Toast from "react-native-toast-message";
import {
  getApifailed,
  getButtonClick,
  getPhoneNumber,
  getPhoneNumberdata,
} from "../module/selectors";
import { Fragment } from "react";
import auth from "@react-native-firebase/auth";
import BackgroundImage from "../Components/BackgroundImage/BackgroundImage";
const OtpScreen = () => {
  const dispatch = useDispatch();
  const navigation = useNavigation();

  const [phone, setPhone] = useState("");
  const [isOtp, setisOtp] = useState(false);
  const [confirm, setConfirm] = useState(null);
  const [code, setCode] = useState("");

  // useEffect(() => {
  //   dispatch(phoneAuth);
  // }, [dispatch]);
  const apifalied = useSelector(getApifailed);
  const isclick = useSelector(getButtonClick);
  console.log(isclick);

  const validatePhone = () => {
    return mobileNumber.test(phone);
  };
  const sendOtpbuttoncall = async () => {
    navigation.navigate("registration");

    try {
      if (validatePhone()) {
        const confirmation = await auth().signInWithPhoneNumber(`+91 ${phone}`);
        console.log(confirmation);
        setConfirm(confirmation);
      } else {
        Toast.show({
          type: "error",
          text1: "Enter Correct Mobile Number",
          visibilityTime: 3000,
          position: "bottom",
        });
      }
    } catch (error) {
      alert(error);
    }
  };
  async function confirmCode() {
    navigation.navigate("registration");

    try {
      let a = await confirm.confirm(code);
      setLoading(false);
      console.log(a);
    } catch (error) {
      console.log(error);
      //  alert("Invalid code.");
    }
  }
  if (!confirm) {
    return (
      <Fragment>
        <BackgroundImage>
          <ScrollView
            contentContainerStyle={{ flexGrow: 1, justifyContent: "center" }}
          >
            <View
              style={{
                flex: 1,
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Image
                source={images.mobilephone}
                resizeMode="contain"
                style={{ height: "40%", width: "90%" }}
              />
              <Text style={styles.mobiletext}>Enter Your Mobile Number</Text>
              <Text style={styles.otpText}>
                We will send you a OTP Verification
              </Text>
            </View>
            <View style={{ flex: 1 }}>
              <View style={{ width: "90%", alignSelf: "center" }}>
                <CustomTextBoxLabel label={"Enter Mobile Number"} />
              </View>
              <CustomTextInput
                placeholder={"Phone Number"}
                keyboardType={"number-pad"}
                maxLength={10}
                onChangeText={(text) => setPhone(text)}
                value={phone}
              />
              <View
                style={{
                  justifyContent: "center",
                  marginTop: 20,
                  alignItems: "center",
                }}
              >
                <CutomButton
                  title={"Send"}
                  textStyle={styles.buttontext}
                  onPress={sendOtpbuttoncall}
                />
              </View>
            </View>
          </ScrollView>
        </BackgroundImage>
      </Fragment>
    );
  } else {
    return (
      <BackgroundImage>
        <ScrollView
          contentContainerStyle={{ flexGrow: 1, justifyContent: "center" }}
          showsVerticalScrollIndicator={false}
          bounces={false}
          enableOnAndroid={true}
        >
          <PhoneIMage />
          <CustomTextInput
            placeholder={"* Enter Otp"}
            keyboardType={"number-pad"}
            onChangeText={(text) => setCode(text)}
            autoFocus={true}
          />
          <View style={styles.btnContainer}>
            <CutomButton
              title={"Verify"}
              textStyle={styles.buttontext}
              onPress={confirmCode}
            />
          </View>

          <View
            style={{
              flexDirection: "row",
              justifyContent: "center",
              margin: "5%",
            }}
          >
            <Text style={styles.otpText}>Didn't receive the OTP ?</Text>
            <TouchableOpacity onPress={validatePhone}>
              <Text style={styles.resendotp}>Resend OTP </Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </BackgroundImage>
    );
  }
};
const PhoneIMage = () => {
  return (
    <>
      <Image
        source={images.mobilenew}
        resizeMode="contain"
        style={{ height: "30%", zIndex: 20, width: "30%", alignSelf: "center" }}
      />
      <View
        style={{
          position: "absolute",
          right: -85,
          top: 80,
          height: "100%",
          width: "100%",
        }}
      >
        <CarIMage />
      </View>
    </>
  );
};
const CarIMage = () => {
  return (
    <Image
      source={images.carvertical}
      resizeMode="contain"
      style={{ height: "30%", width: "30%", alignSelf: "center" }}
    />
  );
};
export default OtpScreen;
const styles = StyleSheet.create({
  singletextinput: {
    width: "95%",
    alignSelf: "center",
    marginTop: "3%",
  },
  btnContainer: {
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 20,
  },
  textlabel: {
    fontSize: 18,
    marginLeft: "2%",
  },
  linearGradient: {
    padding: 10,
    width: "90%",
    marginTop: "5%",
    alignSelf: "center",
  },
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
});
