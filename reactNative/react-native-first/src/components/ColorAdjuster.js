import React from 'react';
import {View,Text,StyleSheet,Button} from 'react-native';

const ColorAdjuster = ({color,currentValue,onDecrease, onIncrease})=>{
  return( <View>
     <Text>{color}</Text>
  <Text>{`Current ${color} value: ${currentValue}`}</Text>
   <Button title={`less ${color}`} onPress={()=>onDecrease()} />
   <Button title={`more ${color}`} onPress={()=>onIncrease()} />
</View>
  )
}
const styles = StyleSheet.create({});
export default ColorAdjuster;