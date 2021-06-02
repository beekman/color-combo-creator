import { combineReducers } from 'redux';
import { colorsReducer } from './colors-reducer';
import { variationsReducer } from './variations-reducer';

export default combineReducers({
  colors: colorsReducer,
  variations: variationsReducer
});
