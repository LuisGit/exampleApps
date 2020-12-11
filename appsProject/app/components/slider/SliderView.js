import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const SliderView = ({ item }) => {
  return (
    <View style={[styles.slide, { backgroundColor: item.backgroundColor }]}>
      <Text style={styles.title}>{item.title}</Text>
      <Image style={styles.image} source={item.image} />
      <Text style={styles.text}>{item.text}</Text>
    </View>
  );
};

export default SliderView;
const styles = StyleSheet.create({
  slide: {
    flex: 1,
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  title: {
    fontSize: 36,
    fontWeight: 'bold',
    color: 'white',
  },
  image: {
    width: '90%',
    height: '90%',
    resizeMode: 'contain',
  },
  text: {},
});
