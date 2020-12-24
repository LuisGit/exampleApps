import React, { useContext } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import NotesContext from '../../context/NotesContext';

const NoteDetails = ({ route, navigation }) => {
  const { data } = useContext(NotesContext);
  const { id } = route.params;
  const myNote = data.find((note) => note.id === id);

  return (
    <View>
      <Text>{myNote.title}</Text>
      <Text>{myNote.content}</Text>
    </View>
  );
};

export default NoteDetails;

const styles = StyleSheet.create({});
