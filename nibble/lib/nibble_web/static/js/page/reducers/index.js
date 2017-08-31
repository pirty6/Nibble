import { routerReducer } from 'react-router-redux';
import { combineReducers } from 'redux';

import TopbarReducer from './data/Topbar';
import LibraryReducer from './data/Library';
import MapReducer from './data/Map';

import UISlideReducer from './ui/slide';

const reducersJson = {
  // form: formReducer,
  routing: routerReducer,
};

//UI Reducers
reducersJson['slide'] = UISlideReducer;

//Data Reducers
reducersJson['topbar'] = TopbarReducer;
reducersJson['library'] = LibraryReducer;
reducersJson['map'] = MapReducer;

export const reducers = combineReducers(reducersJson);

export default reducers;
