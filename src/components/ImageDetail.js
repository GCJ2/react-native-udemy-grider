import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

const ImageDetail = ({ title, imageSource, imageScore }) => {
  return (
    <View>
      <Image source={imageSource} />
      <Text>{title}</Text>
      <Text>Image Score - {imageScore}</Text>
    </View>
  );
};

export default ImageDetail;

const styles = StyleSheet.create({});

// Image is self-closing
// Prop in Native is source, not src
