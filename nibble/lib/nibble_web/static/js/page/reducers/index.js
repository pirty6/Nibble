import { routerReducer } from 'react-router-redux';
import { combineReducers } from 'redux';

import TopbarReducer from './data/Topbar';
import LibraryReducer from './data/Library';
import MapReducer from './data/Map';
import HeroReducer from './data/Hero';
import LocationReducer from './data/Page';

import UISlideReducer from './ui/slide';
import UIModalReducer from './ui/modal';
import UIIDReducer from './ui/site.js';
import UILanguageReducer from './ui/language.js';

const reducersJson = {
  // form: formReducer,
  routing: routerReducer,
};

//UI Reducers
reducersJson['slide'] = UISlideReducer;
reducersJson['modal'] = UIModalReducer;
reducersJson['site'] = UIIDReducer;
reducersJson['language'] = UILanguageReducer;

//Data Reducers
reducersJson['page'] = LocationReducer;
reducersJson['topbar'] = TopbarReducer;
reducersJson['library'] = LibraryReducer;
reducersJson['map'] = MapReducer;
reducersJson['hero'] = HeroReducer;

export const reducers = combineReducers(reducersJson);

export default reducers;
