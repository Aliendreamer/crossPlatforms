import axios from 'axios';

export default axios.create({
   // change it every 8 hours reminder! because of ngrok
   baseURL:'http://d2a089a1.ngrok.io'
})