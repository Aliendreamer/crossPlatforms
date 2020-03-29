import {useState,useEffect} from 'react';
import makeRequest from '../api/yelp';

export default ()=>{
   const [yelpResults,setYelpResults]= useState([]);
   const [errorMessage,setErrorMessage]=useState("");
   const searchApi = async searchTerm => {
       try{
           const reqParams={term:searchTerm,limit:50,location:'san jose'}
           const response =  await makeRequest("/search","GET",reqParams);
           setErrorMessage("");
           setYelpResults(response.businesses);             
      }catch(err){
         setErrorMessage("Something went wrong");
      }
   }

   useEffect(()=>{
      searchApi('pasta');
   },[])
   return [searchApi,yelpResults,errorMessage];
}