import { YELP_KEY } from 'react-native-dotenv';

const  makeRequest = async (path,method,reqParams,isQuery=true)=>{
 
    const  baseUrl=`https://api.yelp.com/v3/businesses${path}`;
    let url=baseUrl;
    if(isQuery){
    let queryStringParts=[];
    const queryKeys = Object.keys(reqParams);
    for (const parameter of queryKeys) {
         queryStringParts.push(`${parameter}=${reqParams[parameter]}&`);
    }
    const queryString=queryStringParts.join("");
    url =baseUrl.concat("?").concat(queryString.substring(0,queryString.length-1));
   }
    const response = await fetch(url,{
       method,
       cache:"no-cache",
       headers :{
          Authorization: `Bearer ${YELP_KEY}`
         }
      });
      return await response.json();
};

export default makeRequest;
