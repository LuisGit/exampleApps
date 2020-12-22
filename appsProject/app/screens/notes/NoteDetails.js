import React, { useContext } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import NotesContext from '../../context/NotesContext';

const NoteDetails = ({ route, navigation }) => {
  const { data } = useContext(NotesContext);
  const { id } = route.params;
  const myNote = data.find((note) => note.id === id);

  return (
    <View>
      <Text>{myNote.title}</Text>
      <Button onPress={() => navigation.goBack()} title="Back" />
    </View>
  );
};

export default NoteDetails;

const styles = StyleSheet.create({});
