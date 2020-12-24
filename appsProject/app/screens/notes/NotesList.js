import React, { useContext, useLayoutEffect } from 'react';
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import NotesContext from '../../context/NotesContext';
import Icon from 'react-native-vector-icons/Entypo';

const NotesList = ({ navigation }) => {
  const { data: notesList, deleteNote } = useContext(NotesContext);

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <TouchableOpacity onPress={() => navigation.navigate('CreateNote')}>
          <Icon style={styles.plusIcon} name="plus" />
        </TouchableOpacity>
      ),
    });
  }, [navigation]);

  return (
    <View>
      <FlatList
        data={notesList}
        keyExtractor={(note) => `${note.id}`}
        renderItem={({ item }) => {
          return (
            <TouchableOpacity
              onPress={() =>
                navigation.navigate('NoteDetails', {
                  id: item.id,
                  title: item.title,
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
  plusIcon: {
    marginRight: 15,
    fontSize: 24,
  },
});
