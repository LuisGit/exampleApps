import React, { useState } from 'react';
import { View, Text } from 'react-native';
import { Button } from 'react-native-elements';
import SearchBar from '../components/SearchBar';
import useResults from '../hooks/useResults';

const SearchScreen = ({ navigation }) => {
  const [term, setTerm] = useState('');
  const [searchApi, result, error] = useResults();

  const goBack = () => {
    navigation.goBack();
  };

  return (
    <View>
      <Text>Search Screen</Text>
      <SearchBar
        term={term}
        onTermChange={setTerm}
        onTermSubmit={() => searchApi(term)}
      />
      {error ? (
        <Text>We have found an error</Text>
      ) : (
        <Text>We have found {result.length}</Text>
      )}

      <Button title="Back" onPress={goBack} />
    </View>
  );
};

export default SearchScreen;
