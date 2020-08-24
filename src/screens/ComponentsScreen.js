import React from "react";
import { StyleSheet, Text, View } from "react-native";

const ComponentsScreen = () => {
  const greeting = "Hi there!";
  const newTextBlock = <Text>This is a text block</Text>;
  const myName = "Greg";

  return (
    <View>
      <Text style={styles.header}>Getting started with React Native!</Text>
      <Text style={styles.subHeader}>My name is {myName}</Text>
    </View>
  );
};

export default ComponentsScreen;

const styles = StyleSheet.create({
  header: {
    fontSize: 45,
  },
  subHeader: {
    fontSize: 20,
  },
});

// <Text> is a primitive React Native element
// Others include <View>, <Image>, and <Button>
// Elements can use inline styles as well:
// return <Text style={{ fontSize: 30 }}>This is a test component.</Text>;
// Remove ; from end of line inside of <Views></Views> as React views it as a string outside of the text element
