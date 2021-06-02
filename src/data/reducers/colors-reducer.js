import { FETCH_COLOR, SET_COLOR } from '../action-types/action-types';

const initialState = {
  a: 1,
  h: 0,
  l: 0.5,
  s: 1
};
export const colorsReducer = (state = initialState, action) => {
  switch(action.type) {
    case FETCH_COLOR:
      return { ...state, baseColor: true };
    case SET_COLOR:
      return { ...state, baseColor: action.payload };
    default:
      return state;
  }
};
