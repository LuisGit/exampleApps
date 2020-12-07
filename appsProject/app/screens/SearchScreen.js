import React, { useState, useEffect } from 'react';
import { View, Text } from 'react-native';
import { Button } from 'react-native-elements';
import SearchBar from '../components/SearchBar';
import yelp from '../api/yelp';
import constants from '../constants';

const SearchScreen = ({ navigation }) => {
  const [term, setTerm] = useState('');
  const [result, setResult] = useState([]);
  const [error, setError] = useState('');

  useEffect(() => {
    searchApi('pizza');
  }, []);

  const searchApi = async (searchTerm) => {
    try {
      const response = await yelp.get('/search', {
        params: {
          limit: 50,
          term: searchTerm,
          location: 'san jose',
        },
      });
      setResult(response.data.businesses);
    } catch (err) {
      setError(constants.GENERAL_ERROR_MESSAGE);
    }
  };

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
