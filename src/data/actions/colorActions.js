import { FETCH_COLOR, SET_COLOR } from '../action-types/action-types';
export const setColor = baseColor => ({
  type: SET_COLOR,
  payload: baseColor
});
