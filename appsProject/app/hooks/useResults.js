import { useState, useEffect } from 'react';
import yelp from '../api/yelp';
import constants from '../constants';

export default () => {
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

  return [searchApi, result, error];
};
