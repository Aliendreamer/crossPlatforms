import React from 'react';
import {View,StyleSheet,Text,Button} from 'react-native';

const TrackDetailScreen =({navigation})=>{
   return <> 
   <Text>TrackDetailScreen</Text>
   <Button title="go to track list" onPress={()=>navigation.navigate("TrackList")}/>
   </>
}

const styles= StyleSheet.create({});
export default TrackDetailScreen;