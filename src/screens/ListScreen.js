import React from "react";
import { StyleSheet, Text, View, FlatList } from "react-native";

const ListScreen = () => {
  const gabeBois = [
    { name: "Reece" },
    { name: "Cody" },
    { name: "Gabe" },
    { name: "Benny" },
  ];

  return (
    <View>
      <FlatList
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
// element === {item: {name: 'Reece'}}
// It is common practice to destructure item off of element
