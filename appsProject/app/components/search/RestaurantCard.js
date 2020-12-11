import React, { useState } from 'react';
import { View, Text, Image, ActivityIndicator, StyleSheet } from 'react-native';

const ResturantCard = ({ item }) => {
  const [loading, setLoading] = useState(true);

  const onLoadEnd = () => {
    setLoading(false);
  };

  return (
    <View style={styles.container}>
      <View style={{ flex: 1 }}>
        <Image
          source={{ uri: item.image_url }}
          style={styles.image}
          onLoadEnd={onLoadEnd}
        />
        <ActivityIndicator
          style={styles.activityIndicator}
          size="large"
          animating={loading}
        />
      </View>
      <Text style={styles.name}>{item.name}</Text>
      <Text>
        {item.rating} Starts, {item.review_count} Reviews
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginLeft: 15,
  },
  image: {
    width: 250,
    height: 120,
    borderRadius: 4,
    marginBottom: 5,
  },
  activityIndicator: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    color: '#00ff00',
  },
  name: {
    fontWeight: 'bold',
  },
});

export default ResturantCard;
