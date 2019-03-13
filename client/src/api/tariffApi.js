import axios from 'axios';
import { ROUTES } from '../constants/api';

export default {
  getTariffs: () =>
    axios({
      method: 'get',
      url: `${ROUTES.BaseURL}/tariffs`,
      headers: {
        'Content-Type': 'application/json',
      },
    }),
};
