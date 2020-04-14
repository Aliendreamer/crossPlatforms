import createDataContext from './createDataContext';
import trackerApi from '../api/tracker';
import {AsyncStorage} from 'react-native';
import {navigate} from"../navigationRef";

const authReducer = (state,action)=>{

   switch(action.type){
      case 'add_error':
      return {...state,errorMessage:action.payload}
      case 'signin':
      case 'signup':
         return {token:action.payload,errorMessage:''}
      default:
         return state;
   }

}

const signup = (dispatch)=> async({email,password})=>{
         try{
            const response = await trackerApi.post('/signup',{email,password});
            await AsyncStorage.setItem('token',response.data.token);   
            dispatch({type:'signin',payload:response.data.token});
            navigate('TrackList');
         }catch(e){
            dispatch({type:"add_error",payload:"Something went wrong with the signup"})
         }  
}

const signin = (dispatch)=> async({email,password})=>{
         try{
               const response = await trackerApi.post('/signin',{email,password});
               await AsyncStorage.setItem('token',response.data.token);   
               dispatch({type:'signin',payload:response.data.token});
               navigate('TrackList');
         }catch(err){
           dispatch({type:"add_error",payload:"Something went wrong with the signin"})

    }
}

const signout = (dispatch)=>{
   return ()=>{
      
   }  
}





export const {Provider,Context}=createDataContext(authReducer,{signin,signup,signout},{token:null,errorMessage:''})