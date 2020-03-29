import {createStackNavigator} from 'react-navigation-stack';
import {createAppContainer} from "react-navigation";
import SearchScreen from './src/screens/searchScreen';
import RestaurantShowScreen from "./src/screens/restaurantShowScreen";

const navigator =  createStackNavigator({
  Search:SearchScreen,
  RestaurantScreen:RestaurantShowScreen
},{
   initialRouteName:'Search',
   defaultNavigationOptions:{
    title:'Business Search'
  }
});

export default createAppContainer(navigator);


