import React from 'react';
import {View,Text,StyleSheet,FlatList,TouchableOpacity} from 'react-native';
import {withNavigation} from "react-navigation";
import RestaurantItem from '../components/restaurantItem';
const RestaurantsList =({title,results,navigation})=>{
  
  if(Object.is(results.length,0)){
     return null
  }
   return (
      <View style={styles.container}>
         <Text style={styles.title}>{title}</Text>
         <FlatList
          horizontal
          showsHorizontalScrollIndicator={false}
          data={results}
          keyExtractor={(result)=>result.id}
          renderItem ={({item})=>{
          return( 
              <TouchableOpacity onPress={()=> navigation.navigate("RestaurantScreen",{id:item.id})}>
              <RestaurantItem restaurantInfo={item}/> 
              </TouchableOpacity>)
          }}
         />
      </View>
   )
}

const styles = StyleSheet.create({
   title:{
      fontSize:18,
      fontWeight:"bold",
      marginLeft:15,
      marginBottom:5
   },
   container:{
      marginBottom:10
   }
});
export default  withNavigation(RestaurantsList);