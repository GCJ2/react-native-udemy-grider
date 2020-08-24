import React from "react";
import { Text, StyleSheet, View, Button, TouchableOpacity } from "react-native";

const HomeScreen = ({ navigation }) => {
  return (
    <View>
      <Text style={styles.text}>The Gabe Bois</Text>
      <Button
        onPress={() => navigation.navigate("Components")}
        title="Go to Components Demo"
      />
      <TouchableOpacity onPress={() => navigation.navigate("List")}>
        <Text>Go to List Demo</Text>
        <Text>Go to List Demo</Text>
        <Text>Go to List Demo</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30,
  },
});

export default HomeScreen;

// Button is self-closing and takes in title prop for button text
// Takes onPress prop that takes in a function to execute some logic

// TouchableOpacity is not self-closing
