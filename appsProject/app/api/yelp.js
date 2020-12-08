import axios from 'axios';
import constants from '../constants';

const getHeaders = () => {
  //const token = await getToken();
  const headers = {
    'Content-Type': 'application/json',
  };

  //   if (token) { //Token should come from an success login or an env
  headers.Authorization =
    'Bearer sAvc2yZ7l_6s7en_vOtxgIkD56sDmNxBKv3O4DTYdXAkhuFdWT82QrXTFz6AKEMmiIhO80s4gqT9yEmGmxix526QBuViveUxo-mn6xQ7CA4LmIFS300r9xQ4RNfKX3Yx';
  //   }
  return headers;
};

export const doPost = async (destination, data) => {
  const headers = getHeaders();
  try {
    const response = await axios.post(
      `${constants.API_URL}${destination}`,
      data,
      headers,
    );
    return response;
  } catch (error) {
    console.log(error);
  }
};

export const doGet = async (destination, params) => {
  const headers = getHeaders();
  let config = {
    headers,
    params,
  };

  try {
    const response = await axios.get(
      `${constants.API_URL}${destination}`,
      config,
    );
    return response;
  } catch (error) {
    console.log(error);
  }
};
