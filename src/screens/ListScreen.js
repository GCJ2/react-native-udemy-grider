import React from "react";
import { StyleSheet, Text, View, FlatList } from "react-native";

const ListScreen = () => {
  // const gabeBois = [
  //   { name: "Reece", key: "0" },
  //   { name: "Gabe", key: "1" },
  //   { name: "Cody", key: "2" },
  //   { name: "Benny", key: "3" },
  //   { name: "Ronny", key: "4" }
  // ];

  const gabeBois = [
    { name: "Reece" },
    { name: "Gabe" },
    { name: "Cody" },
    { name: "Benny" },
    { name: "Ronny" },
  ];

  return (
    <View>
      <FlatList
        keyExtractor={(gabeBoi) => gabeBoi.name}
        data={gabeBois}
        renderItem={({ item }) => {
          return <Text>{item.name}</Text>;
        }}
      />
    </View>
  );
};

export default ListScreen;

const styles = StyleSheet.create({});

// FlatList Element:
// Requires data and renderItem props
// This is similar to .map() from React Web
// renderItem={(element) => {
//  element === {item: {name: 'Reece'}}
// It is common practice to destructure item off of element

// Keys are needed: must be a string and must be unique
// Keys can be added manually or through a keyExtractor
// keyExtractor works similarly to key={i} in .map()
