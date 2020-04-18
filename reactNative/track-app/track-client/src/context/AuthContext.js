import createDataContext from './createDataContext';
import trackerApi from '../api/tracker';
import {AsyncStorage} from 'react-native';
import {navigate} from"../navigationRef";

const authReducer = (state,action)=>{

   switch(action.type){
      case 'add_error':
      return {...state,errorMessage:action.payload}
      case 'remove_error':
         return {...state,errorMessage:""}
      case 'signin':
      case 'signup':
         return {token:action.payload,errorMessage:''}
      case 'signOut':
         return {...state,token:null}
      default:
         return state;
   }

}

const clearErrorMessage =(dispatch)=>()=>{dispatch({type:'remove_error'})}

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

const tryLocalSignIn = (dispatch)=>async()=>{
   const token = await AsyncStorage.getItem('token');
   if(token){
      dispatch({type:'signin',payload:token});
      navigate('TrackList');
   }else{
      navigate("Signup");
   }

}

const signout = (dispatch)=>async()=>{
    await AsyncStorage.removeItem('token');
    dispatch({type:'signOut'});
    navigate("loginFlow");
}





export const {Provider,Context}=createDataContext(authReducer,
                              {signin,signup,signout,clearErrorMessage,tryLocalSignIn},
                              {token:null,errorMessage:''})