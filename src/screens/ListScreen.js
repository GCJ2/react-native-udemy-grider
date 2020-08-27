import React from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';

const ListScreen = () => {
  // const gabeBois = [
  //   { name: "Reece", key: "0" },
  //   { name: "Gabe", key: "1" },
  //   { name: "Cody", key: "2" },
  //   { name: "Benny", key: "3" },
  //   { name: "Greg", key: "4" }
  // ];

  const gabeBois = [
    { name: 'Reece', age: 22 },
    { name: 'Gabe', age: 17 },
    { name: 'Cody', age: 14 },
    { name: 'Benny', age: 57 },
    { name: 'Greg', age: 11 },
    { name: 'Sandwich', age: 27 },
    { name: 'Sven', age: 13 },
    { name: 'Jorgen', age: 14 },
    { name: 'Bill', age: 57 },
    { name: 'Doug', age: 67 },
    { name: 'Carl', age: 15 },
    { name: 'Ronald', age: 14 },
    { name: 'Ula Britta', age: 13 },
    { name: 'Tormund', age: 57 },
    { name: 'Mundungus', age: 16 }
  ];

  return (
    <View>
      <FlatList
        // horizontal
        // showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}
        keyExtractor={(gabeBoi) => gabeBoi.name}
        data={gabeBois}
        renderItem={({ item }) => {
          return (
            <Text style={styles.textStyle}>
              {item.name} - Age: {item.age}
            </Text>
          );
        }}
      />
    </View>
  );
};

export default ListScreen;

const styles = StyleSheet.create({
  textStyle: {
    marginVertical: 25,
    marginHorizontal: 15,
    fontSize: 30
  }
});

// FlatList Element:
// Requires data and renderItem props
// This is similar to .map() from React Web
// renderItem={(element) => {
//  element === {item: {name: 'Reece'}}
// It is common practice to destructure item off of element

// Keys are needed: must be a string and must be unique
// Keys can be added manually or through a keyExtractor
// keyExtractor works similarly to key={i} in .map()

// horizontal prop will make FlatList scroll horizontally
// shows(Horizontal/Vertical)ScrollIndicator will hide scroll bar
