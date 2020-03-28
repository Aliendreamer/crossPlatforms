import React,{useState} from 'react';
import {View,Text,StyleSheet} from "react-native";
import SearchBar  from "../components/searchBar";
import useRequest from "../hooks/useRequest";
import RestaurantList from "../components/retaurantsList";
const SearchScreen = ()=>{
   const [term,setTerm]=useState();
   const [searchApi,results,errorMessage]= useRequest();

   const filterResultsByPrice =(price)=>{
      return results.filter(r=> Object.is(r.price,price));
   }

      return (
         <>
         <SearchBar 
         term={term} 
         error={errorMessage}
         onTermChange={setTerm} 
         onTermSubmit={()=>searchApi(term)}/>
         <View>
            {errorMessage && <Text>{errorMessage}</Text>}
            <RestaurantList title="cost effective" results={filterResultsByPrice("$")} />
            <RestaurantList title ="Bit pricier"  results={filterResultsByPrice("$$")}/>
            <RestaurantList title="Big spender"  results={filterResultsByPrice("$$$")} />
            <RestaurantList title="Excessive spender"  results={filterResultsByPrice("$$$$")} />
            <Text>search screen</Text>
         </View>
         </>
      )
}

const styles = StyleSheet.create({});
export default SearchScreen;