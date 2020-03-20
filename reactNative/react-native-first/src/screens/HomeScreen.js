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
  </View>)
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30
  }
});

export default HomeScreen;
