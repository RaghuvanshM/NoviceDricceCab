
import React, { Component } from 'react';  
import { StyleSheet, View } from 'react-native';  
import MapView from 'react-native-maps';  
import { Marker } from 'react-native-maps';  
const App =(props)=> {  
  
    return (  
      <View style={styles.MainContainer}>  
  
        <MapView  
          style={styles.mapStyle}  
          showsUserLocation={true}  
          showsMyLocationButton={true}
          zoomEnabled={true}  
          onRegionChange={props.onRegionChange}
          zoomControlEnabled={true}  
          initialRegion={{  
            latitude: 28.579660,   
            longitude: 77.321110,  
            latitudeDelta: 0.0922,  
            longitudeDelta: 0.0421,  
          }}>  
  
          <Marker  
            coordinate={{ latitude:props.latitude, longitude: props.longitude }}  
            title={"JavaTpoint"}  
            description={"Java Training Institute"}  
          />  
        </MapView>  
          
      </View>  
    );  
  }  

  export default App
const styles = StyleSheet.create({  
  MainContainer: {  
    position: 'absolute',  
    top: 0,  
    left: 0,  
    right: 0,  
    bottom: 0,    alignItems: 'center',  
    justifyContent: 'flex-end',  
  },  
  mapStyle: {  
    position: 'absolute',  
    top: 0,  
    left: 0,  
    right: 0,  
    bottom: 0,  
  },
    
}); 