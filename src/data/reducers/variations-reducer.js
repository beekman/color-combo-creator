import { FETCH_VARIATIONS_LOADING, FETCH_VARIATIONS } from '../action-types/action-types';

const initialState = {
  harmonyQuantity: 0,
};
export const variationsReducer = (state = initialState, action) => {
  switch(action.type) {
    case FETCH_VARIATIONS_LOADING:
      return { ...state, loading: true };
    case FETCH_VARIATIONS:
      return { ...state, loading: false, list: action.payload };
    case SET_HARMONY_QUANTITY:
      return { ...state, harmonyQuantity: action.payload };
    default:
      return state;
  }
}
