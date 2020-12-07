import React, { useState } from 'react';
import { View, Text } from 'react-native';
import { Button } from 'react-native-elements';
import SearchBar from '../components/SearchBar';

const SearchScreen = ({ navigation }) => {
  const [term, setTerm] = useState('');

  const goBack = () => {
    navigation.goBack();
  };

  const onSearch = () => {
    console.log(`${term} was submitted`);
  };

  return (
    <View>
      <Text>Search Screen</Text>
      <SearchBar
        term={term}
        onTermChange={(newTerm) => {
          setTerm(newTerm);
        }}
        onTermSubmit={onSearch}
      />
      <Button title="Back" onPress={goBack} />
    </View>
  );
};

export default SearchScreen;
