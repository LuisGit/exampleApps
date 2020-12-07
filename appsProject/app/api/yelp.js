import axios from 'axios';
import constants from '../constants';

export default axios.create({
  baseURL: constants.API_URL,
  headers: {
    Authorization:
      'Bearer sAvc2yZ7l_6s7en_vOtxgIkD56sDmNxBKv3O4DTYdXAkhuFdWT82QrXTFz6AKEMmiIhO80s4gqT9yEmGmxix526QBuViveUxo-mn6xQ7CA4LmIFS300r9xQ4RNfKX3Yx',
  },
});
