import {useState,useEffect} from 'react';
import yelpAxios from '../api/yelp';

export default ()=>{
   const [yelpResults,setYelpResults]= useState([]);
   const [errorMessage,setErrorMessage]=useState("");
   const searchApi = async() => {
            try{
            const result = await yelpAxios.get('/search',{
                  params:{
                     limit:50,
                     term,
                     location:'san jose'
                  }
               });
               setYelpResults(result.data.businesses);
         }catch(err){
            setErrorMessage("Something went wrong");
         }
   }

   useEffect(()=>{
      searchApi('pasta');
   },[])
   return [searchApi,yelpResults,errorMessage];
}