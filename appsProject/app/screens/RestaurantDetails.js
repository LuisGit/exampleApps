import React, { useState, useEffect, useCallback } from 'react';
import { View, Text, FlatList, Image, StyleSheet } from 'react-native';
import { doGet } from '../api/yelp';

const RestaurantDetails = ({ route }) => {
  const [details, setDetails] = useState(null);
  const { id } = route.params;

  useEffect(() => {
    getDetails(id);
  }, [getDetails, id]);

  const getDetails = useCallback(async () => {
    const result = await doGet(`/${id}`);
    setDetails(result.data);
  }, [id]);

  if (!details) {
    return null;
  }
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Restaurant Details {details.name}</Text>
      <FlatList
        data={details.photos}
        keyExtractor={(item) => item}
        renderItem={({ item }) => {
          return <Image source={{ uri: item }} style={styles.image} />;
        }}
      />
    </View>
  );
};

export default RestaurantDetails;

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginVertical: 5,
  },
  image: {
    width: 300,
    height: 200,
    marginVertical: 5,
  },
});
