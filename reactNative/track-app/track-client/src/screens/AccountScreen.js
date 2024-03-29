import React,{useContext} from 'react';
import {StyleSheet,Text} from 'react-native';
import {Button} from 'react-native-elements';
import Spacer from '../components/Spacer';
import {Context as AuthContext} from '../context/AuthContext';
import {SafeAreaView} from 'react-navigation';
import {FontAwesome} from "@expo/vector-icons";

const AccountScreen =()=>{
   const {signout}= useContext(AuthContext);
   return (
   <SafeAreaView forceInset={{top:'always'}}>
   <Text>AccountScreen</Text>
   <Spacer>
   <Button title= "Sign out" onPress={signout}/>
   </Spacer>
   </SafeAreaView>)
}
AccountScreen .navigationOptions = {
   title:'Account',
   tabBarIcon: <FontAwesome name="gears" size={20}/>
}
const styles= StyleSheet.create({});
export default AccountScreen;