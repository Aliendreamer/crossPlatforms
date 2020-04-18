import React,{useContext,useEffect} from 'react';
import {View,StyleSheet} from 'react-native';
import {Context as AuthContext} from "../context/AuthContext";
import AuthForm from "../components/form";
import NavLink from '../components/Navlink';
import {NavigationEvents} from 'react-navigation';

const SignupScreen =({navigation})=>{
   const {state,signup,clearErrorMessage} = useContext(AuthContext);
  
 
   return(<View style={styles.container}> 
   <NavigationEvents 
            onWillBlur={clearErrorMessage}
            />
         <AuthForm 
         headerText='Sing up for Tracker'
         buttonText='Sign up'
         errorMessage={state.errorMessage}
         onPressAction={signup}
         />
        <NavLink routeName="Signin" buttonText="Already have an account.Sign in instead"/>
   </View>)
}
SignupScreen.navigationOptions=()=>{
   return {
      header:null
   }
}
const styles= StyleSheet.create({
   container:{
      flex:1,
      justifyContent:"center",
      marginBottom:250
   }
});
export default SignupScreen;