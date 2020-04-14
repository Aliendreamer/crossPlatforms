import React,{useContext} from 'react';
import {View,StyleSheet} from 'react-native';
import {Context as AuthContext} from "../context/AuthContext";
import AuthForm from "../components/form";
import NavLink from '../components/Navlink';


const SigninScreen =()=>{
   const {state,signin} = useContext(AuthContext);

   return (
         <View style={styles.container}>
            <AuthForm
             headerText="Sign in Tracker"
             errorMessage={state.errorMessage}
             buttonText ='Sign in'
              onPressAction={signin}
            />
            <NavLink
               buttonText='Dont have a account? Sign in instead'
               routeName='Signup'
            />
         </View>
   )
}

SigninScreen.navigationOptions=()=>{
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
export default SigninScreen;