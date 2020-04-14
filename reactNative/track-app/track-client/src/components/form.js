import React,{useState} from 'react';
import {StyleSheet} from 'react-native';
import {Text,Button,Input} from 'react-native-elements'
import Spacer from './Spacer';

const AuthForm=({headerText,errorMessage,buttonText,onPressAction})=>{

   const [email,setEmail]=useState('');
   const [password,setPassword]=useState('');
   return (
      <>
      <Spacer>
   <Text h3>{headerText}</Text>
      </Spacer>
      <Spacer>
      <Input
       label='Email'
         value={email}
         autoCapitalize="none"
         autoCorrect={false}
         onChangeText={setEmail}/>
      </Spacer>
      <Spacer>
      <Input 
         label='Password' 
         secureTextEntry
         value={password}
         autoCapitalize="none"
         autoCorrect={false}
         onChangeText={setPassword}
      />
      {errorMessage ?<Text style={styles.errorMessage}>{errorMessage}</Text>:null}
      </Spacer>
      <Spacer>
      <Button title={buttonText} onPress={()=>onPressAction({email,password})}/>
      </Spacer>
      </>
   )
}

const styles=StyleSheet.create({
   errorMessage:{
      fontSize:16,
      color:'red',
      marginLeft:15,
      marginTop:10
   }
});

export default AuthForm;