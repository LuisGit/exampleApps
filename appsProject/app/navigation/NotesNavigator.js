import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

//Screens
import NotesList from '../screens/notes/NotesList';

const Stack = createStackNavigator();

const NotesNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName="NotesList"
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
      <Stack.Screen name="NotesList" component={NotesList} />
    </Stack.Navigator>
  );
};
export default NotesNavigator;
