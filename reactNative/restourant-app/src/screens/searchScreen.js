import React,{useState} from 'react';
import {Text,StyleSheet,ScrollView} from "react-native";
import SearchBar  from "../components/searchBar";
import useRequest from "../hooks/useRequest";
import RestaurantList from "../components/restaurantsList";
const SearchScreen = ()=>{
   const [term,setTerm]=useState("");
   const [searchApi,results,errorMessage]= useRequest(term);

   const filterResultsByPrice =(price)=>{
      return results.filter(r=> Object.is(r.price,price));
   }

      return (
         <>
         <SearchBar 
         term={term} 
         error={errorMessage}
         onTermChange={setTerm} 
         onTermSubmit={()=>searchApi(term)}
         />
         <ScrollView>
            {errorMessage ? <Text>{errorMessage}</Text>:null }
            <RestaurantList title="cost effective" results={filterResultsByPrice("$")} />
            <RestaurantList title ="Bit pricier"  results={filterResultsByPrice("$$")} />
            <RestaurantList title="Big spender"  results={filterResultsByPrice("$$$")} />
            <RestaurantList title="Excessive spender"  results={filterResultsByPrice("$$$$")}  />
         </ScrollView>
         </>
      )
}

const styles = StyleSheet.create({});
export default SearchScreen;