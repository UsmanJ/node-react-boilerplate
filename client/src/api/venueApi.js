import axios from 'axios';
import { ROUTES } from '../constants/api';

export default {
  getVenues: searchTerm =>
    axios({
      method: 'get',
      url: `${ROUTES.BaseURL}/get-venues`,
      params: {
        searchTerm,
      },
      headers: {
        'Content-Type': 'application/json',
      },
    }),
};
