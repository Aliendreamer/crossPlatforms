import axios from 'axios';

export default axios.create({
baseUrl:'https://api.yelp.com/v3/businesses',
   headers:{
      Authorization: `Bearer  ${REACT_APP_YELP_KEY}`
   }
});

