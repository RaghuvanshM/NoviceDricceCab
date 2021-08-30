
 
import React, { Component } from 'react';
import { Text, View, LogBox, ActivityIndicator, Button, Alert, Dimensions, FlatList, StyleSheet, SafeAreaView, ScrollView, TouchableOpacity, TextInput } from 'react-native';
import MapView, { Polyline } from "react-native-maps";
import Geolocation from '@react-native-community/geolocation';
import AsyncStorage from '@react-native-community/async-storage';
export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      searchKeyword: '',
      searchResults: [],
      isShowingResults: false,
      region: {
        latitude: 10,
        longitude: 10,
        latitudeDelta: 0.002,
        longitudeDelta: 0.002
      },
      latitudeCurrent: props.route.params.current_lat,
      longitudeCurrent: props.route.params.current_long,
      isMapReady: false,
      marginTop: 1,
      userLocation: "",
      regionChangeProgress: false
    };

  }
  componentDidMount() {
    LogBox.ignoreLogs(['VirtualizedLists should never be nested']);
  }
  UNSAFE_componentWillMount() {
    Geolocation.getCurrentPosition(
      (position) => {
        const region = {
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
          latitudeDelta: 0.029,
          longitudeDelta: 0.029
        };
        this.setState({
          region: region,
          loading: false,
          error: null,
        });
      },
      (error) => {
        this.setState({
          error: error.message,
          loading: false
        })
      },
      { enableHighAccuracy: false, timeout: 200000, maximumAge: 5000 },
    );
  }

  onMapReady = () => {
    this.setState({ isMapReady: true, marginTop: 0 });
  }
  fetchAddress = () => {
    AsyncStorage.getItem('Loginid').then((token) => {
      let data = {
        id: parseInt(token),
        lat: this.state.region.latitude,
        long: this.state.region.longitude
      }
      const url = "https://mobilepp.jingleinfo.com/mobileapp/app/User/getaddress";
      fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'x-api-key': 'vijai@123'

        },
        credentials: 'include',
        body: JSON.stringify(data)
      }).then(res => res.json())
        .then(res2 => {
        }
        );
    });
  }
  onRegionChange = region => {
    this.setState({
      region,
      regionChangeProgress: true
    }, () => this.fetchAddress());
  }

  onLocationSelect = () => {
    var items = ['ogjruha9up2tse9cr8w92dynj6iuwtjk', 'uev1jm7oxwik5rraiopcev9c25ktf989', 'u3vcj8mcme17wngai47ra7yrdi4w95mfe', '4d8qyvdbk914fzqi4w428p6xokp85zm9'];
    var item = items[Math.floor(Math.random() * items.length)];
    const NewUrl = "https://apis.mapmyindia.com/advancedmaps/v1/" + item + "/rev_geocode?lat=" + this.state.region.latitude + "&lng=" + this.state.region.longitude

    fetch(NewUrl)
      .then((response) => response.json())
      .then((responseJson) => {
    
        const userLocation = responseJson.results[0].formatted_address;
        this.setState({
          userLocation: userLocation,
          regionChangeProgress: false
        });
        Alert.alert(
          `Your Current Location`,
          `${userLocation}`
        );
      });
  }
  render() {
    let { markers } = this.state;
    if (this.state.loading) {
      return (
        <View style={styles.spinnerView}>
          <ActivityIndicator size="large" color="#0000ff" />
        </View>
      );
    } else {
      return (
        <View style={styles.container}>
          <View style={{ flex: 2 }}>
            {!!this.state.region.latitude && !!this.state.region.longitude &&
              <MapView
                style={{ ...styles.map, marginTop: this.state.marginTop }}
                initialRegion={this.state.region}
                showsUserLocation={true}
                onMapReady={this.onMapReady}
                rotateEnabled={false}
                scrollEnabled={false}
                onRegionChangeComplete={this.onRegionChange}
              >
                {this.state.searchlat ? <MapView.Marker
                  coordinate={{ "latitude": this.state.searchlat, "longitude": this.state.searchlong }}
                  pinColor='green'
                  title={"Your Location"}
                  draggable
                /> : null
                }
                <MapView.Marker
                  coordinate={{ "latitude": parseFloat(this.state.latitudeCurrent), "longitude": parseFloat(this.state.longitudeCurrent) }}
                  title={"Your Login Location"}

                />
                <MapView.Marker
                  coordinate={{ "latitude": this.state.region.latitude, "longitude": this.state.region.longitude }}
                  title={"Your Current location"}
                  pinColor="green"

                />

              </MapView>
            }

            <View style={styles.mapMarkerContainer}>
            </View>
          </View>
          <View style={styles.deatilSection}>

            <Button
              title="PICK THIS LOCATION"
              onPress={this.onLocationSelect}
            >
            </Button>
          </View>
        </View>
      );
    }
  }
}

const styles = StyleSheet.create({
  container: {
    display: "flex",
    height: '100%',
    width: '100%'
  },
  map: {
    flex: 1
  },
  mapMarkerContainer: {
    left: '47%',
    position: 'absolute',
    top: '20%'
  },
  mapMarker: {
    fontSize: '20%',
    color: "red"
  },
  deatilSection: {
    backgroundColor: "#fff",
    padding: 0,
    marginBottom: hp('15%')
  },
  spinnerView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  btnContainer: {
    width: '90%',
    position: "absolute",
    marginTop: '9.5%',
    alignSelf: 'center'

  },
  currentLocation: {
    color: '#ab2020'
  },
  searchBox: {
    width: '100%',
    height: 50,
    fontSize: '3.5%',
    borderRadius: 8,
    borderColor: '#aaa',
    color: '#000',
    backgroundColor: '#fff',
    borderWidth: 1.5,
    paddingLeft: 15,
    marginTop:'2%'

  },
  Searchcontainer: {
    flexDirection: 'row',
  },
  button: {
    marginTop: 30,

  },
  resultItem: {
    width: '100%',
    justifyContent: 'center',
    height: 40,
    borderBottomColor: '#ccc',
    borderBottomWidth: 1,
    paddingLeft: 25,
  },
  searchResultsContainer: {
    width: 280,
    height: 200,
    backgroundColor: '#fff',
  },
})
