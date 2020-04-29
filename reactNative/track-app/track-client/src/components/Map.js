import React from 'react';
import {StyleSheet} from 'react-native';
import MapView, { Polyline } from 'react-native-maps';

const Map =()=>{
   let points =[];
   for (let index = 0; index <20; index++) {
     points.push({
      latitude: 37.33233+index*0.001,
      longitude:-122.03121+ index*0.001
     })
      
   }
   return <MapView 
    initialRegion={{
       latitude: 37.33233,
       longitude:-122.03121,
       latitudeDelta:0.01,
       longitudeDelta:0.01
    }}  
   style={styles.map}>
      <Polyline coordinates={points}/>
      </MapView>
}

const styles = StyleSheet.create({
   map:{
      height:300
   }
});
export default Map;