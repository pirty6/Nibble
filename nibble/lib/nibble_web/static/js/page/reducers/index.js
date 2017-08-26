import { routerReducer } from 'react-router-redux';
import { combineReducers } from 'redux';

const reducersJson = {
  // form: formReducer,
  routing: routerReducer,
};

export const reducers = combineReducers(reducersJson);

export default reducers;
