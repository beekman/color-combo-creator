import { FETCH_VARIATIONS_PENDING, FETCH_VARIATIONS, SET_HARMONY_QUANTITY, SET_INVERSE_MAX_QUANTITY, SET_INVERSE_QUANTITY, SET_ANALOGOUS_QUANTITY, SET_LIGHTER_QUANTITY, SET_DARKER_QUANTITY, SET_DESATURATED_QUANTITY } from '../action-types/action-types';
export const variationsReducer = (state = initialState, action) => {
  switch(action.type) {
    case FETCH_VARIATIONS_PENDING:
      return { ...state, loading: true };
    case FETCH_VARIATIONS:
      return { ...state, loading: false, list: action.payload };
    case SET_HARMONY_QUANTITY:
      return { ...state, harmonyQuantity: action.payload };
    case SET_INVERSE_MAX_QUANTITY:
      return { ...state, inverseMaxQuantity: action.payload };
    case SET_INVERSE_QUANTITY:
      return { ...state, inverseQuantity: action.payload };
    case SET_ANALOGOUS_QUANTITY:
      return { ...state, analogousQuantity: action.payload };
    case SET_LIGHTER_QUANTITY:
      return { ...state, lighterQuantity: action.payload };
    case SET_DARKER_QUANTITY:
      return { ...state, darkerQuantity: action.payload };
    case SET_DESATURATED_QUANTITY:
      return { ...state, desaturatedQuantity: action.payload };
    default:
      return state;
  }
};
