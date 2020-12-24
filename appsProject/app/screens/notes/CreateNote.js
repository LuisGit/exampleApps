import React, { useState, useContext } from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import { TextInput } from '../../styles/StyledCustomComponent';
import NotesContext from '../../context/NotesContext';
import Toast from 'react-native-toast-message';

const CreateNote = ({ navigation }) => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const { addNote } = useContext(NotesContext);

  const addPost = () => {
    addNote({ title, content });
    Toast.show({
      text1: 'New note added!',
      text2: 'Congrats 👋!',
      type: 'success',
      position: 'bottom',
    });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Enter title</Text>
      <TextInput
        variant="input"
        style={styles.input}
        value={title}
        onChangeText={(text) => setTitle(text)}
      />
      <Text style={styles.label}>Enter content</Text>
      <TextInput
        variant="input"
        color="primary"
        value={content}
        style={styles.input}
        onChangeText={setContent}
      />
      <Button onPress={addPost} title="Add Note" />
    </View>
  );
};

export default CreateNote;

const styles = StyleSheet.create({
  container: {
    margin: 5,
  },
  label: {
    fontSize: 20,
    marginBottom: 5,
  },
  input: {
    marginBottom: 5,
  },
});
