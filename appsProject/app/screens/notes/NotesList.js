import React, { useContext } from 'react';
import { View, Text, Button, FlatList, StyleSheet } from 'react-native';
import NotesContext from '../../context/NotesContext';

const NotesList = () => {
  const { data: notesList, addNote } = useContext(NotesContext);
  return (
    <View>
      <Text>Hello!</Text>
      <Button
        onPress={() => addNote({ title: 'Hello there!' })}
        title="Tap me!"
      />
      <FlatList
        data={notesList}
        keyExtractor={(note) => `${note.id}`}
        renderItem={({ item }) => {
          return <Text>{item.title}</Text>;
        }}
      />
    </View>
  );
};

export default NotesList;

const styles = StyleSheet.create({});
