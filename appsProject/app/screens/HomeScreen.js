import React from 'react';
import { View, Text, Button } from 'react-native';

const HomeScreen = ({ navigation }) => {
  const searchPress = () => {
    navigation.navigate('Search');
  };

  return (
    <View>
      <Text> Examples: </Text>
      <Button onPress={searchPress} title="Search example" />
    </View>
  );
};

export default HomeScreen;
