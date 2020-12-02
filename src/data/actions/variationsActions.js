import {
  FETCH_VARIATIONS, FETCH_VARIATIONS_LOADING, SET_HARMONY_QUANTITY, SET_INVERSE_MAX_QUANTITY,
  SET_INVERSE_QUANTITY,
  SET_ANALOGOUS_QUANTITY,
  SET_LIGHTER_QUANTITY,
  SET_DARKER_QUANTITY,
  SET_DESATURATED_QUANTITY
} from '../action-types/action-types';

const initialState = {
  harmonyQuantity: 0,
  inverseMaxQuantity: 1,
  
};
export const fetchVariations = () => dispatch => {
  dispatch({ type: FETCH_VARIATIONS_LOADING });
  return getVariations()
    .then(variations => dispatch({
      type: FETCH_VARIATIONS,
      payload: variations
    }));
};
