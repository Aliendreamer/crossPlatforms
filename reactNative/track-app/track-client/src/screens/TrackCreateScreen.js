import "../_mockLocation";
import {Context as LocationContext} from "../context/LocationContext";
import React,{useEffect,useState,useContext} from 'react';
import {StyleSheet, Text} from 'react-native';
import Map from '../components/Map';
import {SafeAreaView} from 'react-navigation';
//import {Text} from 'react-native-elements';
import {requestPermissionsAsync,watchPositionAsync,Accuracy} from 'expo-location';
const TrackCreateScreen =()=>{
   const [err,setErr] = useState(null);
   const {addLocation} = useContext(LocationContext);
   const startWatching= async()=>{
      try {
         await requestPermissionsAsync();
         await watchPositionAsync({
            accuracy:Accuracy.BestForNavigation,
            timeInterval:1000,
            distanceInterval:10
         },(location)=>{
            addLocation(location);
         });
      } catch (error) {
         setErr(error);
      }
   }
   useEffect(()=>{
      startWatching();
   },[])
   return (
      <SafeAreaView forceInset={{top:'always'}}> 
      <Text >Create Track</Text>
      <Map/>
      {err?<Text>Enable location services</Text>:null}
      </SafeAreaView>
   )
}

const styles= StyleSheet.create({});
export default TrackCreateScreen;