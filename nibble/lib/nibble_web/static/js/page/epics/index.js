import { combineEpics } from 'redux-observable';
import pageFetch from './pages';

const epics = combineEpics(
  pageFetch,
);

export default epics;
