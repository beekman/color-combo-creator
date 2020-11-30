import { createStore, compose, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import reducer from './data/reducers/variations-reducers';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default createStore(
  reducer,
  composeEnhancers(
    applyMiddleware(thunk)
  )
);

// function reducer(state = {}, action) {
//   console.log('IN REDUCER!!!', action);
//   return state;
// }

// const store = createStore(
//   reducer,
//   applyMiddleware(thunk.default)
// );

// console.log(store.getState());

// const action = dispatch => {
//   console.log('INSIDE ACTION');
//   fetch('https://jsonplaceholder.typicode.com/posts/1')
//     .then(res => res.json())
//     .then(json => dispatch({ type: 'POST', payload: json }));
// };

// store.dispatch(action);
