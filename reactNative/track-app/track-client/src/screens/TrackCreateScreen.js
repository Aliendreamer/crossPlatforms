import "../_mockLocation";
import {Context as LocationContext} from "../context/LocationContext";
import React,{useContext} from 'react';
import {StyleSheet, Text} from 'react-native';
import Map from '../components/Map';
import {SafeAreaView,withNavigationFocus} from 'react-navigation';
import useLocation from '../hooks/useLocation';

const TrackCreateScreen =({isFocused})=>{
   const {addLocation} = useContext(LocationContext);
   const [err] = useLocation(isFocused,()=>addLocation(location));
  
   return (
      <SafeAreaView forceInset={{top:'always'}}> 
      <Text >Create Track</Text>
      <Map/>
      {err?<Text>Enable location services</Text>:null}
      </SafeAreaView>
   )
}

const styles= StyleSheet.create({});
export default withNavigationFocus(TrackCreateScreen);