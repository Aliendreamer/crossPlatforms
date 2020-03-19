import React from 'react';
import {View, Text, StyleSheet,FlatList } from "react-native";

const ListScreen =()=>{

   const friends =[
      {name:"testOne",age:"1"},{name:"testTwo",age:"2"},{name:"testthree",age:"3"},{name:"testtfour",age:"4"}
   ]
   return (<FlatList 
      horizontal={true}
      showsHorizontalScrollIndicator={false}
      keyExtractor={(friend)=>friend.age}
      data={friends} 
      renderItem={({item})=>{
      return   <Text key={item.age} style={style.textStyle}>Friend: {item.name} Age {item.age}</Text>
      }}/>
   )
}
const style = StyleSheet.create({
   textStyle:{
      marginVertical:50
   }
});

export default ListScreen;