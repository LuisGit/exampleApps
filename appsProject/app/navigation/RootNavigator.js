import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import AppNavigator from './AppNavigator';

// import AuthNavigator from './AuthNavigator';
//<Stack.Screen name="AuthNavigator" component={AuthNavigator} />

const Stack = createStackNavigator();

const RootNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName="AppNavigator"
      screenOptions={({ route, navigation }) => ({
        headerShown: false,
        defaultNavigationOptions: () => ({
          gesturesEnabled: false,
        }),
      })}>
      <Stack.Screen
        name="AppNavigator"
        component={AppNavigator}
        options={{
          animationEnabled: false,
        }}
      />
    </Stack.Navigator>
  );
};

export default RootNavigator;
