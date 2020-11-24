import { FETCH_VARIATIONS_LOADING, FETCH_VARIATIONS } from '../action-types/action-types';

const initialState = {
  loading: true,
  list: []
};
export default function reducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_VARIATIONS_LOADING:
      return { ...state, loading: true };
    case FETCH_VARIATIONS:
      return { ...state, loading: false, list: action.payload };
    default:
      return state;
  }
}
