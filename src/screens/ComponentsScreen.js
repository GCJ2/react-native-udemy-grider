import React from "react";
import { StyleSheet, Text } from "react-native";

const ComponentsScreen = () => {
  return <Text style={styles.textStyle}>This is a test component.</Text>;
};

export default ComponentsScreen;

const styles = StyleSheet.create({
  textStyle: {
    fontSize: 30,
  },
});
