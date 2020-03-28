import React from 'react';
import { Text, View, StyleSheet} from 'react-native';

const BoxScreen = ()=>{

   return (
      <View style={styles.viewStyle}>
         <Text style={styles.textStyle}>Box Screen</Text>
         <Text style={styles.textStyle}>Box Screen2</Text>
         <Text style={styles.textStyle}>Box Screen3</Text>

      </View>
   )
}

const styles = StyleSheet.create({
   viewStyle:{
      borderWidth:1,
      borderColor:'black'
   },
   textStyle:{
      borderWidth:3,
      borderColor:"red"
   }
})
export default BoxScreen;