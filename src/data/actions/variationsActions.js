import {
  FETCH_VARIATIONS_LIST,
  FETCH_VARIATIONS_LIST_PENDING,
  SET_HARMONY_QUANTITY,
  SET_INVERSE_MAX_QUANTITY,
  SET_INVERSE_QUANTITY,
  SET_ANALOGOUS_QUANTITY,
  SET_LIGHTER_QUANTITY,
  SET_DARKER_QUANTITY,
  SET_DESATURATED_QUANTITY
} from '../action-types/action-types';


export const getVariations = () => dispatch => {
  dispatch({ type: FETCH_VARIATIONS_LIST_PENDING });
  return getVariations()
    .then(variations => dispatch({
      type: FETCH_VARIATIONS_LIST,
      payload: variationsList
    }));
};

export const setHarmonyQuantity = contactDetails => ({
  type: SET_HARMONY_QUANTITY,
  payload: harmonyQuantity
});
