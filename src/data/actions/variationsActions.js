import { FETCH_VARIATIONS, FETCH_VARIATIONS_LOADING, SET_VARIATIONS } from '../action-types/action-types';

const initialState = {
  harmonyQuantity: 0,
  
};
export const fetchVariations = () => dispatch => {
  dispatch({ type: FETCH_VARIATIONS_LOADING });
  return getVariations()
    .then(variations => dispatch({
      type: FETCH_VARIATIONS,
      payload: variations
    }));
};
