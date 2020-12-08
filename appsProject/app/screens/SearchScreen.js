import React, { useState } from 'react';
import { View, Text, ScrollView } from 'react-native';
import SearchBar from '../components/SearchBar';
import useResults from '../hooks/useResults';
import ResultList from '../components/ResultsList';

const SearchScreen = () => {
  const [term, setTerm] = useState('');
  const [searchApi, result, error] = useResults();

  const filterByPrice = (price) => {
    return result.filter((item) => {
      return item.price === price;
    });
  };

  return (
    <View style={{ flex: 1 }}>
      <SearchBar
        term={term}
        onTermChange={setTerm}
        onTermSubmit={() => searchApi(term)}
      />
      {error ? <Text>We have found an error</Text> : null}
      <ScrollView bounces={false}>
        <ResultList title="Cost Effective" data={filterByPrice('$')} />
        <ResultList title="Bit Pricer" data={filterByPrice('$$')} />
        <ResultList title="Big Spender!" data={filterByPrice('$$$')} />
      </ScrollView>
    </View>
  );
};

export default SearchScreen;
