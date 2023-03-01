import { combineReducers } from 'redux';
import Counter from './reducer';
import curUser from './user';

const rootReducer = combineReducers({
  Counter,
  curUser,
});
export default rootReducer;
