import React from 'react';
import {StyleSheet,Text,Button} from 'react-native';

const TrackListScreen =({navigation})=>{
   return <> 
   <Text>TrackListScreen</Text>
   <Button  onPress={()=>navigation.navigate("TrackDetail")}>go to track detail</Button>
   </>
}

const styles= StyleSheet.create({});
export default TrackListScreen;