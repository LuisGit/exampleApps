import { useState, useEffect } from 'react';
import { doGet } from '../api/yelp';
import constants from '../constants';

export default () => {
  const [result, setResult] = useState([]);
  const [error, setError] = useState('');

  useEffect(() => {
    searchApi('pizza');
  }, []);

  const searchApi = async (searchTerm) => {
    try {
      const params = {
        limit: 50,
        term: searchTerm,
        location: 'san jose',
      };
      const response = await doGet('/search', params);
      setResult(response.data.businesses);
    } catch (err) {
      setError(constants.GENERAL_ERROR_MESSAGE);
    }
  };

  return [searchApi, result, error];
};
