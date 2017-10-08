import api from '../../api/venueApi';
import keyMirror from '../../util/keyMirror';

export const actionTypes = keyMirror(
  {
    UPDATE_PROPERTY: null,
    VENUES_RECEIVED: null,
  },
  'VENUE',
);

export const updateProperty = (field, value) => ({
  type: actionTypes.UPDATE_PROPERTY,
  payload: {
    field,
    value,
  },
});

export const getVenues = searchTerm => (dispatch) => {
  api.getVenues(searchTerm).then((response) => {
    dispatch({
      type: actionTypes.VENUES_RECEIVED,
      payload: response.data,
    });
  });
};
