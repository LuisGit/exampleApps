import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

//Screens
import NotesList from '../screens/notes/NotesList';
import CreateNote from '../screens/notes/CreateNote';
import EditNote from '../screens/notes/EditNote';
import NoteDetails from '../screens/notes/NoteDetails';

const Stack = createStackNavigator();

const NotesNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName="NotesList"
      screenOptions={({ route, navigation }) => ({
        headerShown: false,
        defaultNavigationOptions: () => ({
          gesturesEnabled: false,
        }),
      })}>
      <Stack.Screen name="NotesList" component={NotesList} />
      <Stack.Screen name="CreateNote" component={CreateNote} />
      <Stack.Screen name="EditNote" component={EditNote} />
      <Stack.Screen name="NoteDetails" component={NoteDetails} />
    </Stack.Navigator>
  );
};
export default NotesNavigator;
