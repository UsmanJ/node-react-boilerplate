import { combineReducers } from 'redux';
import tariffReducer from './tariff';

export default combineReducers({
  tariff: tariffReducer,
});
