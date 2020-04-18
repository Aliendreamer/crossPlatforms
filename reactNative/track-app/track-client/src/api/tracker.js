import axios from 'axios';

export default axios.create({
   // change it every 8 hours reminder! because of ngrok
   baseURL:'http://6c9c4ca8.ngrok.io',
   headers:{"Access-Control-Allow-Origin":'*'}
})