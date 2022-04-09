import React, { useEffect } from "react";
import { Provider, useDispatch, useSelector } from "react-redux";
import { Store } from "./src/module/store";
import { PersistGate } from "redux-persist/integration/react";
import { persistStore } from "redux-persist";
import RouterComponent from "./src/router";
import {
  StatusBar,
  View,
  Alert,
  Text,
  Animated,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
} from "react-native";
import { enableScreens } from "react-native-screens";
import SplashScreenComponent from "./src/screens/SplashScreen";
import messaging from "@react-native-firebase/messaging";
import Geolocation from "@react-native-community/geolocation";
import { getAccetedDriverdata } from "./src/module/actions";
import { getUserProfile } from "./src/module/selectors";
enableScreens();
const persistor = persistStore(Store);

const App = () => {
  useEffect(() => {
    return () => {
      persistor.flush();
    };
  }, []);

  useEffect(() => {
    var watchOptions = {
      frequency: 10 * 1000,
      timeout: 60 * 60 * 1000,
      enableHighAccuracy: true, // may cause errors if true
    };
    const watch = Geolocation.watchPosition(on_success, on_error, watchOptions);

    const on_success = () => {
      console.log(watch);
    };
    const on_error = () => {};
  });

  return (
    <>
      <View style={{ flex: 1 }}>
        <Provider store={Store}>
          <PersistGate
            persistor={persistor}
            children={(bootstrapped) => {
              if (bootstrapped) {
                return <RouterComponent />;
              } else {
                return null;
              }
            }}
          />
        </Provider>
      </View>
    </>
  );
};
export default App;
const styles = StyleSheet.create({
  bottomView: {
    height: 100,
    width: "100%",
    backgroundColor: "white",
    position: "absolute",
    elevation: 5,
  },
  icomingtext: {
    fontSize: 15,
    alignSelf: "center",
    fontFamily: "OpenSans-Bold",
  },
  buttoncontainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    marginHorizontal: 30,
  },
  cancleButton: {
    height: 50,
    width: 100,
    backgroundColor: "red",
    borderRadius: 5,
    justifyContent: "center",
    alignItems: "center",
  },
  AcceptButton: {
    height: 50,
    width: 100,
    backgroundColor: "green",
    borderRadius: 5,
    justifyContent: "center",
    alignItems: "center",
  },
  statusText: {
    fontSize: 16,
    color: "white",
    fontFamily: "OpenSans-Bold",
  },
});
