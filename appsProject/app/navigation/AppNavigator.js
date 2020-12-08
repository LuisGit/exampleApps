import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

//Screens
import HomeScreen from '../screens/HomeScreen';
import SearchScreen from '../screens/SearchScreen';
import RestaurantDetails from '../screens/RestaurantDetails';

const Stack = createStackNavigator();

const AppNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={({ route, navigation }) => (
        {
          defaultNavigationOptions: () => ({
            gesturesEnabled: false,
          }),
        },
        {
          headerTitleAlign: 'center',
          headerStyle: {
            backgroundColor: '#f4511e',
          },
          headerTintColor: '#fff',
        }
      )}>
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen
        name="Search"
        component={SearchScreen}
        options={{ title: 'Business Search' }}
      />
      <Stack.Screen
        name="RestaurantDetails"
        component={RestaurantDetails}
        options={{ title: 'Details' }}
      />
    </Stack.Navigator>
  );
};
export default AppNavigator;
