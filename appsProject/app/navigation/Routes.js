import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import RootNavigator from './RootNavigator';
import Toast from 'react-native-toast-message';

const Routes = () => {
  return (
    <NavigationContainer>
      <RootNavigator />
      <Toast ref={(ref) => Toast.setRef(ref)} />
    </NavigationContainer>
  );
};
export default Routes;
