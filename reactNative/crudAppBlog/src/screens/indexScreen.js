import React,{useContext}  from 'react';
import {View,Text,StyleSheet,FlatList,Button} from 'react-native';
import {Context} from "../context/blogContext";
import {Feather} from "@expo/vector-icons";

const IndexScreen =()=>{
   const {state, addBlogPost } = useContext(Context);
   return (
         <View style={styles.row}>
            <Text>IndexScreen</Text>
            <Button title="add blog post" onPress={addBlogPost}/>
            <FlatList
            data={state}
            keyExtractor={(blogPost)=>blogPost.title}
            renderItem={({item})=>{
            return (<View>
               <Text styles={styles.title}>{item.title}</Text>
            <Feather name="trash" style={styles.icon}/>
            </View>)
            }}
            />
         </View>
   )
}

const styles = StyleSheet.create({
   row:{
      borderTopWidth:1,
      borderColor:"gray",
      flexDirection:'row',
      justifyContent:'space-between',
      paddingVertical:20,
      paddingHorizontal:10
   },
   title:{
      fontSize:18
   },
   icon:{
      fontSize:24
   }
});

export default IndexScreen;