import React, { useState, useContext } from 'react';
import { ActivityIndicator, View, Text, StyleSheet } from 'react-native';
import NotesForm from '../../components/notes/NotesForm';
import NotesContext from '../../context/NotesContext';

const EditNote = ({ route, navigation }) => {
  const { id } = route.params;
  const { data, updateNote } = useContext(NotesContext);
  const item = data.filter((note) => note.id === id);
  const [showLoader, setLoader] = useState(false);

  const submitForm = (note) => {
    setLoader(true);
    updateNote(note, () => {
      setLoader(false);
    });
  };

  return (
    <View>
      <Text>{item.title}</Text>
      <NotesForm onFormPress={submitForm} ButtonTitle={'Save'} data={item[0]} />
      {showLoader && <ActivityIndicator />}
    </View>
  );
};

export default EditNote;

const styles = StyleSheet.create({});
