import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput } from 'react-native';

const TextScreen = () => {
  const [password, setPassword] = useState('');
  return (
    <View style={styles.view}>
      <Text>Please enter a password</Text>
      <TextInput style={styles.input}
                 autoCapitalize='none'
                 autoCorrect={false}
                 value={password}
                 onChangeText={newValue => setPassword(newValue)} />
      {password.length < 5 ? <Text style={styles.error}>Password must be at least 5 characters</Text> : null}
    </View>
  );
};

const styles = StyleSheet.create({
  view: {
    margin: 15
  },
  input: {
    marginTop: 15,
    borderColor: 'black',
    borderWidth: 1
  },
  error: {
    color: 'red',
  }
});

export default TextScreen;

// TextInput does not have any default styling