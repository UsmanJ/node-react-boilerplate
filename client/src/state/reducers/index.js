import { combineReducers } from 'redux';
import venueReducer from './venue';

export default combineReducers({
  venue: venueReducer,
});
