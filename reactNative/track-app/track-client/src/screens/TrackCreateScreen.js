import "../_mockLocation";
import {Context as LocationContext} from "../context/LocationContext";
import React,{useContext,useCallback} from 'react';
import {StyleSheet, Text} from 'react-native';
import Map from '../components/Map';
import {SafeAreaView,withNavigationFocus} from 'react-navigation';
import useLocation from '../hooks/useLocation';
import TrackForm from "../components/trackForm";
import TrackListScreen from "./TrackListScreen";
import {FontAwesome} from "@expo/vector-icons";
const TrackCreateScreen =({isFocused})=>{
   const {addLocation,state:{recording}} = useContext(LocationContext);
   const callback= useCallback(location=>{
      addLocation(location,recording)
   },[recording])
   const [err] = useLocation(isFocused || recording,callback);
  
   return (
      <SafeAreaView forceInset={{top:'always'}}> 
      <Text >Create Track</Text>
      <Map/>
      {err?<Text>Enable location services</Text>:null}
      <TrackForm/>
      </SafeAreaView>
   )
}
TrackListScreen.navigationOptions = {
   title:'Add Track',
   tabBarIcon: <FontAwesome name="plus" size={20}/>
}
const styles= StyleSheet.create({});
export default withNavigationFocus(TrackCreateScreen);