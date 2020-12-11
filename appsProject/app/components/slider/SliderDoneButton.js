import React from 'react';
import { View } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import sliderButtonStyle from '../../styles/sliderDoneButton';

const SliderDoneButton = () => {
  return (
    <View style={sliderButtonStyle.buttonCircle}>
      <Icon name="md-checkmark" color="rgba(255, 255, 255, .9)" size={24} />
    </View>
  );
};

export default SliderDoneButton;
