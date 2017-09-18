import { combineReducers } from 'redux';
import manageUsers from './user';

const rootReducer = combineReducers({
  // Add all reducers here
  manageUsers,
});

export default rootReducer;
