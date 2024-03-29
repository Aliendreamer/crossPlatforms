import React, {useContext} from "react";
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import  IndexScreen from "../src/screens/indexscreen";
import {Provider} from "../src/context/blogContext";

const navigator = createStackNavigator({
  Index:IndexScreen
},{
  initialRouteName:"Index",
  defaultNavigationOptions:{
    title:"Blogs"
  }
})


const App = createAppContainer(navigator);

export default ()=>{
  return ( <Provider>
            <App/>
          </Provider>
  )
}