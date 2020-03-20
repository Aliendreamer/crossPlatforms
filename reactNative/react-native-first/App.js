import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import HomeScreen from "./src/screens/HomeScreen";
import ListScreen from "./src/screens/ListComponent";
import ComponentScreen from "./src/screens/ComponentScreen";
import ImageScreen from "./src/screens/imageScreen";
const navigator = createStackNavigator(
  {
    Home: HomeScreen,
    Component:ComponentScreen,
    List:ListScreen,
    Image:ImageScreen
  },
  {
    initialRouteName: "Home",
    defaultNavigationOptions: {
      title: "App"
    }
  }
);

export default createAppContainer(navigator);
