import React from 'react';
import { View,Image,StyleSheet,Text} from "react-native";

const ImageDetail = ({title,imageSource,score}) =>{

   return(
      <View>
      <Text>{title}</Text>
      <Text>{score}</Text>
      <Image style={style} source={imageSource}></Image>
      </View>
   )
}

const style =StyleSheet.create({
 
});
export default ImageDetail;