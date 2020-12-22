import React, { useContext, useLayoutEffect } from 'react';
import {
  View,
  Text,
  Button,
  FlatList,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import NotesContext from '../../context/NotesContext';
import Icon from 'react-native-vector-icons/Entypo';

const NotesList = ({ navigation }) => {
  const { data: notesList, addNote, deleteNote } = useContext(NotesContext);

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <Button onPress={() => navigation.navigate('CreateNote')} title="+" />
      ),
    });
  }, [navigation]);

  return (
    <View>
      <Button
        onPress={() => addNote({ title: 'Hello there!' })}
        title="Add a Post!"
      />
      <FlatList
        data={notesList}
        keyExtractor={(note) => `${note.id}`}
        renderItem={({ item }) => {
          return (
            <TouchableOpacity
              onPress={() =>
                navigation.navigate('NoteDetails', {
                  id: item.id,
                  title: `Note ${item.id}`,
                })
              }>
              <View style={styles.row}>
                <Text style={styles.rowTitle}>{item.title}</Text>
                <TouchableOpacity onPress={() => deleteNote(item.id)}>
                  <Icon style={styles.rowIcont} name="trash" />
                </TouchableOpacity>
              </View>
            </TouchableOpacity>
          );
        }}
      />
      <Button onPress={() => navigation.goBack()} title="Back" />
    </View>
  );
};

export default NotesList;

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 10,
    paddingHorizontal: 10,
    borderTopWidth: 1,
    borderColor: 'grey',
  },
  rowTitle: {
    fontSize: 20,
  },
  rowIcont: {
    fontSize: 24,
  },
});
