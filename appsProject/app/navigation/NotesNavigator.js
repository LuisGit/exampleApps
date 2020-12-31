import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NotesProvider } from '../context/NotesContext';

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
        headerShown: true,
        defaultNavigationOptions: () => ({
          gesturesEnabled: false,
        }),
      })}>
      <Stack.Screen
        name="NotesList"
        component={NotesList}
        options={{ title: 'List of Notes' }}
      />
      <Stack.Screen
        name="CreateNote"
        component={CreateNote}
        options={{ title: 'New note' }}
      />
      <Stack.Screen
        name="EditNote"
        component={EditNote}
        options={{ headerBackTitle: 'Back', title: 'Edit your note' }}
      />
      <Stack.Screen
        name="NoteDetails"
        component={NoteDetails}
        options={({ route }) => ({ title: route.params.title })}
      />
    </Stack.Navigator>
  );
};

const Navigator = NotesNavigator;

export default () => {
  return (
    <NotesProvider>
      <Navigator />
    </NotesProvider>
  );
};
