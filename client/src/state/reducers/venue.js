import set from 'lodash.set';
import { actionTypes } from '../actions/venueActions';

const initialState = {
  searchTerm: '',
  groups: {},
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case actionTypes.UPDATE_PROPERTY: {
      let newState = { ...state };
      const { field, value } = payload;
      newState = set(newState, `${field}`, value);
      return {
        ...newState,
      };
    }
    case actionTypes.VENUES_RECEIVED:
      return {
        ...state,
        groups: payload.groups,
      };
    default:
      return state;
  }
};
