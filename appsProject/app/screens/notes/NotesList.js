import React, { useContext } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import NotesContext from '../../context/NotesContext';

const NotesList = () => {
  const value = useContext(NotesContext);
  return (
    <View>
      <Text>Hello {value}</Text>
    </View>
  );
};

export default NotesList;

const styles = StyleSheet.create({});
