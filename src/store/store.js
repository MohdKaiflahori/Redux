/* eslint-disable import/no-unresolved */
/* eslint-disable import/extensions */
// import { createStore } from 'redux';
import { legacy_createStore as createStore } from 'redux';
import rootReducer from '../reducers/index';
// import Counter from '../reducers/reducer';

export const store = createStore(
  rootReducer,
  // Counter,
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
);
