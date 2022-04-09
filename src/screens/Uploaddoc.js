import React, { Component, useEffect } from "react";
import {
  Text,
  View,
  StyleSheet,
  Linking,
  TouchableOpacity,
  Pressable,
  ScrollView,
} from "react-native";
import Icon from "react-native-vector-icons/Entypo";
import AntIcon from "react-native-vector-icons/AntDesign";
import Iconlist from "../Components/icon";
import { useNavigation } from "@react-navigation/core";
import { useDispatch } from "react-redux";
import { uploddocfaild } from "../module/actions/user";
import BackgroundImage from "../Components/BackgroundImage/BackgroundImage";
const Document = (props) => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(uploddocfaild());
  }, [navigation]);
  return (
    <BackgroundImage>
      <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
        <TouchableOpacity
          onPress={() => {
            props.navigation.goBack();
          }}
          style={{ flex: 0.1, margin: 20 }}
        >
          <View style={{ padding: 10 }}>
            <AntIcon name={Iconlist.arrowleft} size={30} color="black" />
          </View>
        </TouchableOpacity>
        <Text
          style={{
            fontSize: 18,
            alignSelf: "center",
            fontFamily: "OpenSans-Bold",
          }}
        >
          Upload Your document{" "}
        </Text>
        <View style={{ flex: 1, alignItems: "center" }}>
          <CutomDoc
            title={"Profile Photo"}
            onViewwPress={() => {
              navigation.navigate("photo");
            }}
          />
          <CutomDoc
            title={"Driving License"}
            onViewwPress={() => {
              navigation.navigate("driverlicense");
            }}
          />
          <CutomDoc
            title={"Aadhar Photo"}
            onViewwPress={() => {
              navigation.navigate("aadharphoto");
            }}
          />
          <CutomDoc
            title={"Cab Photo"}
            onViewwPress={() => {
              navigation.navigate("cabphoto");
            }}
          />
          <CutomDoc
            title={"Video Upload"}
            onViewwPress={() => {
              navigation.navigate("videoupload");
            }}
          />
        </View>
      </ScrollView>
    </BackgroundImage>
  );
};

export default Document;

const styles = StyleSheet.create({
  iconwithtext: {
    flexDirection: "row",
    justifyContent: "space-between",
    flex: 1,
    borderBottomWidth: 2,
    borderBottomColor: "#e1e1e1",
    padding: "10%",
  },
  singledocumentrow: {
    flexDirection: "row",
    marginLeft: "5%",
  },

  documenttext: {
    fontSize: 16,
    padding: 2,
    fontFamily: "OpenSans-Bold",
  },
  documenticon: {
    marginTop: "5%",
    marginLeft: "2%",
  },
});

const CutomDoc = (props) => {
  return (
    <View style={styles.singledocumentrow}>
      <View style={{ justifyContent: "center" }}>
        <Icon
          name="text-document-inverted"
          size={30}
          color="black"
          style={styles.documenticon}
        />
      </View>
      <Pressable
        style={styles.iconwithtext}
        onPress={() => {
          props.onViewwPress();
        }}
      >
        <Text style={styles.documenttext}>{props.title}</Text>
        <Icon name="chevron-small-right" size={30} color="black" />
      </Pressable>
    </View>
  );
};
