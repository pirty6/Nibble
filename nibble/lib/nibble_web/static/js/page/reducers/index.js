import { routerReducer } from 'react-router-redux';
import { combineReducers } from 'redux';

import TopbarReducer from './data/Topbar';

const reducersJson = {
  // form: formReducer,
  routing: routerReducer,
};

//Data Reducers
reducersJson['topbar'] = TopbarReducer;

export const reducers = combineReducers(reducersJson);

export default reducers;
