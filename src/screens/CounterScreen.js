import React, { useState } from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

const CounterScreen = () => {
  let count = 0;
  const [counter, setCounter] = useState(0);

  const incrementCount = () => {

  };

  return (
    <View>
      <Button title='Increase'
              onPress={() => {
                setCounter(counter => counter + 1);
              }}/>
      <Button title='Decrease'
              onPress={() => {
                setCounter(counter => counter - 1);
              }}/>
      <Text>Current Count: {counter}</Text>
    </View>
  );
};

const styles = StyleSheet.create({});

export default CounterScreen;