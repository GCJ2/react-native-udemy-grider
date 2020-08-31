import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import ColorCounter from '../components/ColorCounter';

const SquareScreen = () => {
  const [red, setRed] = useState(0);
  const [green, setGreen] = useState(0);
  const [blue, setBlue] = useState(0);

  const COLOR_INCREMENT = 15;

  return (
    <View>
      <ColorCounter color='Red'
                    onIncrease={() => setRed(red => red + COLOR_INCREMENT)}
                    onDecrease={() => setRed(red => red - COLOR_INCREMENT)}/>
      <ColorCounter color='Green'
                    onIncrease={() => setGreen(green => green + COLOR_INCREMENT)}
                    onDecrease={() => setGreen(green => green - COLOR_INCREMENT)}/>
      <ColorCounter color='Blue'
                    onIncrease={() => setBlue(blue => blue + COLOR_INCREMENT)}
                    onDecrease={() => setBlue(blue => blue - COLOR_INCREMENT)}/>
      <Text>RGB: {red}, {green}, {blue}</Text>
    <View style={{height: 150, width: 150, backgroundColor: `rgb(${red},${green},${blue})`}}>
    </View>
    </View>
  );
};
//      <View style={{height: 150, width: 150, backgroundColor: `rgb({red},{green},{blue})`}}>
const styles = StyleSheet.create({});

export default SquareScreen;