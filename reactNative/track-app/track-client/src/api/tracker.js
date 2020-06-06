import axios from 'axios';
import {AsyncStorage} from "react-native";

const instance = axios.create({
   // change it every 8 hours reminder! because of ngrok
   baseURL:'http://0a6d8b41.ngrok.io',
   headers:{"Access-Control-Allow-Origin":'*'}
})

instance.interceptors.request.use(
   async (config)=>{
      const token = await AsyncStorage.getItem('token');
      if(token)
         config.headers.Authorization = `Bearer ${token}`;
      return config
   },
   (err)=>{ return Promise.reject(err)}
)

export default instance;