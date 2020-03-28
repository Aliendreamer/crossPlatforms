import React from "react";
import { Text, StyleSheet, View, Button,TouchableOpacity } from "react-native";

const HomeScreen = props => {
   const {navigation} = props
  return(<View>
    <Text style={styles.text}>done</Text>
    <Button
    onPress={()=>navigation.navigate("Component")}
    title="Go to components demo">
    </Button>
    <TouchableOpacity onPress={()=>navigation.navigate("List")}>
      <Text>Go to list demo</Text>
    </TouchableOpacity>
    <TouchableOpacity onPress={()=>navigation.navigate("Image")}>
      <Text>Go to image demo</Text>
    </TouchableOpacity>
    <TouchableOpacity onPress={()=>navigation.navigate("Counter")}>
      <Text>Go to counter demo</Text>
    </TouchableOpacity>
    <Button
    onPress={()=>navigation.navigate("Colour")}
    title="Go to colour state demo">
    </Button>
    <Button
    onPress={()=>navigation.navigate("Square")}
    title="Go to square state demo">
    </Button>
    <Button
    onPress={()=>navigation.navigate("Text")}
    title="Go to text  demo">
    </Button>
    <Button
    onPress={()=>navigation.navigate("Box")}
    title="Go to box  ">
    </Button>
  </View>)
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30
  }
});

export default HomeScreen;
