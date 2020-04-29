import React,{useEffect,useState} from 'react';
import {StyleSheet, Text} from 'react-native';
import Map from '../components/Map';
import {SafeAreaView} from 'react-navigation';
//import {Text} from 'react-native-elements';
import {requestPermissionsAsync} from 'expo-location';
const TrackCreateScreen =()=>{
   const [err,setErr] = useState(null);

   const startWatching= async()=>{
      try {
         await requestPermissionsAsync();
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