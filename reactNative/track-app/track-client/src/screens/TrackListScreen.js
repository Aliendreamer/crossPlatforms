import React from 'react';
import {View,StyleSheet,Text,Button} from 'react-native';

const TrackListScreen =({navigation})=>{
   return <> <Text>TrackListScreen</Text>
   <Button title="go to track detail" onPress={()=>navigation.navigate("DetailTrack")}/>
   </>
}

const styles= StyleSheet.create({});
export default TrackListScreen;