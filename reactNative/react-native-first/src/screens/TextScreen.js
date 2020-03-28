import React, { useState } from 'react';
import {View, Text, TextInput, StyleSheet} from 'react-native';

const TextScreen =()=>{
   const [text, setText] = useState("");
   return( 
         <View>
            <TextInput 
            style={styles.input}
            autoCapitalize='none'
            autoCorrect={false}
            value={text}
            onChangeText={(newText)=>setText(newText)}
            />
            <Text>{text}</Text>
         </View>
   )
}
const styles = StyleSheet.create({
   input:{
      margin:15,
      borderColor:'black',
      borderWidth:1
   }
});
export default TextScreen;