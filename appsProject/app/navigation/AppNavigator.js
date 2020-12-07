import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

//Screens
import HomeScreen from '../screens/HomeScreen';
import SearchScreen from '../screens/SearchScreen';

const Stack = createStackNavigator();

const AppNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={({ route, navigation }) => ({
        headerShown: false,
        defaultNavigationOptions: () => ({
          gesturesEnabled: false,
        }),
      })}>
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen
        name="Search"
        component={SearchScreen}
        options={{ title: 'My home' }}
      />
    </Stack.Navigator>
  );
};
export default AppNavigator;
