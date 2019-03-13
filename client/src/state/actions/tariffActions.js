import api from '../../api/tariffApi';
import keyMirror from '../../util/keyMirror';

export const actionTypes = keyMirror(
  {
    RECEIVED_TARIFFS: null,
  },
  'TARIFF',
);

export const updateProperty = (field, value) => ({
  type: actionTypes.UPDATE_PROPERTY,
  payload: {
    field,
    value,
  },
});

export const getTariffs = () => (dispatch) => {
  api.getTariffs().then((response) => {
    dispatch({
      type: actionTypes.RECEIVED_TARIFFS,
      payload: response.data,
    });
  });
};
