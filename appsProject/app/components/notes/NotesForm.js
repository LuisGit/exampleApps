import React, { useState } from 'react';
import { Text, Button, View, StyleSheet } from 'react-native';
import { TextInput } from '../../styles/StyledCustomComponent';

const NotesForm = ({ onFormPress, ButtonTitle, data }) => {
  const [title, setTitle] = useState(data.title);
  const [content, setContent] = useState(data.content);

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
      <Button
        onPress={() => onFormPress({ id: data.id, title, content })}
        title={ButtonTitle}
      />
    </View>
  );
};

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

export default NotesForm;
