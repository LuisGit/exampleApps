import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

//Screens
import HomeScreen from '../screens/HomeScreen';
import BusinessSearch from '../screens/search/SearchScreen';
import RestaurantDetails from '../screens/search/RestaurantDetails';
import NotesNavigator from '../navigation/NotesNavigator';

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
        name="BusinessSearch"
        component={BusinessSearch}
        options={{ title: 'Business Search' }}
      />
      <Stack.Screen
        name="RestaurantDetails"
        component={RestaurantDetails}
        options={{ title: 'Details' }}
      />
      <Stack.Screen
        name="NotesNavigator"
        component={NotesNavigator}
        options={{ title: 'Notes' }}
      />
    </Stack.Navigator>
  );
};
export default AppNavigator;
