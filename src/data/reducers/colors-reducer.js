import { GET_COLOR, SET_COLOR } from '../action-types/action-types';

const initialState = {
  a: 1,
  h: 0,
  l: 0.5,
  s: 1
};
export default function colorsReducer(state = initialState, action) {
  switch(action.type) {
    case FETCH_VARIATIONS_LOADING:
      return { ...state, loading: true };
    case FETCH_VARIATIONS:
      return { ...state, loading: false, list: action.payload };
    default:
      return state;
  }
}
