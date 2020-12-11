import React, { useState } from 'react';
import { View, Text } from 'react-native';
import { FloatingAction } from 'react-native-floating-action';
import SliderView from '../components/slider/SliderView';
import AppIntroSlider from 'react-native-app-intro-slider';
import SliderDoneButton from '../components/slider/SliderDoneButton';
import constants from '../constants';

const HomeScreen = ({ navigation }) => {
  const [showApp, setShowApp] = useState(false);

  const onSliderDone = () => {
    setShowApp(true);
  };

  if (showApp) {
    return (
      <View style={{ flex: 1 }}>
        <Text> Examples: </Text>
        <View>
          <Text>
            Search interacts with a public API to provides food business sort by
            price.
          </Text>
        </View>
        <View>
          <Text>Notes examplifies how to work with local data.</Text>
        </View>
        <FloatingAction
          ref={(ref) => {
            this.floatingAction = ref;
          }}
          actions={constants.MENU_ACTIONS}
          onPressItem={(name) => {
            switch (name) {
              case 'bt_search':
                navigation.navigate('BusinessSearch');
                break;
              default:
                break;
            }
          }}
          distanceToEdge={{ vertical: 10, horizontal: 10 }}
        />
      </View>
    );
  } else {
    return (
      <AppIntroSlider
        renderItem={SliderView}
        data={constants.INTRO_SLIDERS}
        renderDoneButton={SliderDoneButton}
        onDone={onSliderDone}
      />
    );
  }
};

export default HomeScreen;
