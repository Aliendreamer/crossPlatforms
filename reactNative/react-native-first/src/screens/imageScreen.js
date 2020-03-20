import React from 'react';
import {View,StyleSheet } from 'react-native';
import ImageDetail from "../components/ImageDetail";
const ImageScreen =props=>{

 return( 
  <View>
 <ImageDetail  score= {10} title="beach" imageSource ={require("../../assets/beach.jpg")}/>
 <ImageDetail  score ={9} title="mountain" imageSource ={require("../../assets/mountain.jpg")}/>
 <ImageDetail  score={8}  title="forest" imageSource ={require("../../assets/forest.jpg")}/>
 </View>
 )

}

const styles = StyleSheet.create({});
export default ImageScreen;