import React from 'react';
import { Text, StyleSheet, View, Button, TouchableOpacity } from 'react-native';

const HomeScreen = ({ navigation }) => {
  return (
    <View>
      <Text style={styles.text}>The Gabe Bois</Text>
      <Button
        onPress={() => navigation.navigate('Components')}
        title="Go to Components Demo"
      />
      <Button
        onPress={() => navigation.navigate('List')}
        title="Go to List Demo"
      />
      <Button
        onPress={() => navigation.navigate('Image')}
        title="Go to Image Screen"
      />
      <Button
        onPress={() => navigation .navigate('Counter')}
        title="Go to Counter Demo"
      />
      <Button
        onPress={() => navigation .navigate('Color')}
        title="Go to Color Demo"
      />
      <Button
        onPress={() => navigation .navigate('Square')}
        title="Go to Square Demo"
      />
      {/* <TouchableOpacity onPress={() => navigation.navigate("List")}>
        <Text>Go to List Demo</Text>
        <Text>Go to List Demo</Text>
        <Text>Go to List Demo</Text>
      </TouchableOpacity> */}
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
