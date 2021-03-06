import React, { useReducer } from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import ColorCounter from '../components/ColorCounter';

const initialState = { red: 0, green: 0, blue: 0 };

const reducer = (state, action) => {
  switch (action.type) {
    case 'red':
      return state.red + action.payload > 255 || state.red + action.payload < 0
        ? state : { ...state, red: state.red + action.payload };
    case 'green':
      return state.green + action.payload > 255 || state.green + action.payload < 0
        ? state : { ...state, green: state.green + action.payload };
    case 'blue':
      return state.blue + action.payload > 255 || state.blue + action.payload < 0
        ? state : { ...state, blue: state.blue + action.payload };
    case 'reset':
      return initialState;
    default:
      return state;
  }
};

const SquareScreen = () => {

  const [state, dispatch] = useReducer(reducer, initialState);

  const COLOR_INCREMENT = 15;

  const { red, green, blue } = state;

  return (
    <View>
      <ColorCounter color='Red'
                    onIncrease={() => dispatch({ type: 'red', payload: COLOR_INCREMENT })}
                    onDecrease={() => dispatch({ type: 'red', payload: -COLOR_INCREMENT })} />
      <ColorCounter color='Green'
                    onIncrease={() => dispatch({ type: 'green', payload: COLOR_INCREMENT })}
                    onDecrease={() => dispatch({ type: 'green', payload: -COLOR_INCREMENT })} />
      <ColorCounter color='Blue'
                    onIncrease={() => dispatch({ type: 'blue', payload: COLOR_INCREMENT })}
                    onDecrease={() => dispatch({ type: 'blue', payload: -COLOR_INCREMENT })} />
      <View>
        <Button title={'Reset Colors'}
                onPress={() => dispatch({ type: 'reset' })} />
      </View>
      <Text>RGB: {red}, {green}, {blue}</Text>
      <View style={{ height: 150, width: 150, backgroundColor: `rgb(${red},${green},${blue})` }}>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({});

export default SquareScreen;