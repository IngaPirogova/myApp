import React from "react";
import { View, Text, StyleSheet } from "react-native";
import MapView, { Marker } from 'react-native-maps';

const MapScreen = ({ route }) => {
  console.log('route.params.location', route.params.location);
  const {latitude, longitude } = route.params.location;
   
   return (
  <View style={styles.container}>
    <MapView
      style={{ flex: 1 }}
      
      initialRegion={{
        latitude:latitude ,
        longitude: longitude,
        latitudeDelta: 0.001,
        longitudeDelta: 0.006,
      }}
      >
      <Marker
          coordinate={{ latitude: latitude, longitude: longitude }}        
        title="travel photo"
      />
    </MapView>
  </View>
);
};
    
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: "center",
    },
  });
  
  export default MapScreen;