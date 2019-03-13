import { actionTypes } from '../actions/tariffActions';

const initialState = {
  tariffs: [],
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case actionTypes.RECEIVED_TARIFFS:
      return {
        ...state,
        tariffs: payload,
      };
    default:
      return state;
  }
};
