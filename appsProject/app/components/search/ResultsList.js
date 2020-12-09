import React from 'react';
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import RestaurantCard from '../../components/search/RestaurantCard';

const ResultList = ({ title, data }) => {
  const navigation = useNavigation();

  const onItemPress = (item) => {
    navigation.navigate('RestaurantDetails', { id: item.id });
  };
  if (!data.length) {
    return null;
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
        data={data}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => {
          return (
            <TouchableOpacity onPress={() => onItemPress(item)}>
              <RestaurantCard item={item} />
            </TouchableOpacity>
          );
        }}
      />
    </View>
  );
};

export default ResultList;

const styles = StyleSheet.create({
  container: {
    marginBottom: 5,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 18,
    marginLeft: 15,
    marginBottom: 10,
  },
});
