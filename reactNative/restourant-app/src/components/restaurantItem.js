import React from 'react';
import {View,Image,Text,StyleSheet} from 'react-native';



const RestaurantItem = ({restaurantInfo})=>{
   return(
      <View style={styles.container}>
         <Image style={styles.imageStyle} source={{
            uri:restaurantInfo.image_url
         }}/>
         <Text style={styles.textStyle}>{restaurantInfo.name}</Text>
      <Text>{restaurantInfo.rating} Stars, {restaurantInfo.review_count} Reviews</Text>
      </View>
   )
}


const styles = StyleSheet.create({
   container:{
      marginLeft:15
   },
   imageStyle:{
      width:250,
      height:120,
      borderRadius:4,
      marginBottom:5
   },
   textStyle:{
      fontWeight:"bold"
   },
});

export default RestaurantItem;