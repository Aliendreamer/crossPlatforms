import axios from 'axios';

export default axios.create({
   // change it every 8 hours reminder! because of ngrok
   baseURL:'http://0a6d8b41.ngrok.io',
   headers:{"Access-Control-Allow-Origin":'*'}
})