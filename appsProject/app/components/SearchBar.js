import React from 'react';
import { View, TextInput } from 'react-native';
import searchStyle from '../styles/searchScreen';
import Icon from 'react-native-vector-icons/Feather';

const SearchBar = ({ term, onTermChange, onTermSubmit }) => {
  return (
    <View style={searchStyle.backgroundStyle}>
      <Icon name="search" style={searchStyle.iconStyle} />
      <TextInput
        placeholder="Search Bar"
        style={searchStyle.textInput}
        value={term}
        onChangeText={onTermChange}
        onEndEditing={onTermSubmit}
      />
    </View>
  );
};

export default SearchBar;
