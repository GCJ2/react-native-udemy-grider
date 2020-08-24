import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import ImageDetail from '../components/ImageDetail';

const ImageScreen = () => {
  return (
    <View>
      <ImageDetail
        title="Beach"
        imageSource={require('../../assets/beach.jpg')}
        imageScore={7}
      />
      <ImageDetail
        title="Forest"
        imageSource={require('../../assets/forest.jpg')}
        imageScore={22}
      />
      <ImageDetail
        title="Mountain"
        imageSource={require('../../assets/mountain.jpg')}
        imageScore={43}
      />
    </View>
  );
};

export default ImageScreen;

const styles = StyleSheet.create({});
