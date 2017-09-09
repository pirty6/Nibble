import { routerReducer } from 'react-router-redux';
import { combineReducers } from 'redux';

import TopbarReducer from './data/Topbar';
import LibraryReducer from './data/Library';
import MapReducer from './data/Map';
import HeroReducer from './data/Hero';

import UISlideReducer from './ui/slide';
import UIModalReducer from './ui/modal';
import UIIDReducer from './ui/site.js';

const reducersJson = {
  // form: formReducer,
  routing: routerReducer,
};

//UI Reducers
reducersJson['slide'] = UISlideReducer;
reducersJson['modal'] = UIModalReducer;
reducersJson['site'] = UIIDReducer;

//Data Reducers
reducersJson['topbar'] = TopbarReducer;
reducersJson['library'] = LibraryReducer;
reducersJson['map'] = MapReducer;
reducersJson['hero'] = HeroReducer;

export const reducers = combineReducers(reducersJson);

export default reducers;
