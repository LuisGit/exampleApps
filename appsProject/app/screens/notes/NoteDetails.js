import React, { useContext, useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import NotesContext from '../../context/NotesContext';
import Icon from 'react-native-vector-icons/Entypo';

const NoteDetails = ({ route, navigation }) => {
  const { data } = useContext(NotesContext);
  const { id } = route.params;
  const myNote = data.find((note) => note.id === id);

  useEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <TouchableOpacity
          onPress={() => navigation.navigate('EditNote', { id })}>
          <Icon style={styles.pencilIcon} name="pencil" />
        </TouchableOpacity>
      ),
    });
  }, [navigation, id]);

  return (
    <View>
      <Text>{myNote.title}</Text>
      <Text>{myNote.content}</Text>
    </View>
  );
};

export default NoteDetails;

const styles = StyleSheet.create({
  pencilIcon: {
    marginRight: 15,
    fontSize: 24,
  },
});
