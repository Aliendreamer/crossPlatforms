import React,{useState} from 'react';
import {View,Button,StyleSheet, FlatList} from "react-native";
import {randomRgb} from "../common/helpers";
const ColourScreen = props=>{
   const [colors,setColours]= useState([]);
   return(   
      <View>
         <Button title="add colour" onPress={
            ()=> {

            setColours([...colors,randomRgb()])
         }}/>
         <FlatList
            data={colors}
            keyExtractor={(item)=>item}
            renderItem={({item})=>{
               return <View style ={{height:100,width:100, backgroundColor:item}}/>
            }}
         />
      </View>
   )
}
const styles =StyleSheet.create({});
export default ColourScreen;