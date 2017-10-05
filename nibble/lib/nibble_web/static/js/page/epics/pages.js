import { ActionsObservable as Observable } from 'redux-observable';
import 'rxjs/add/observable/concat';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/mergeMap';
import { push } from 'react-router-redux';
import {
  PAGE_FETCH,
} from '../constants/actionTypes';
import API from '../utils/api';

let url;

export const fetchEpic = action$ => (
  action$.ofType(PAGE_FETCH)
  .debounceTime(80)
  .flatMap(action =>
    // url = action.payload,
    // console.log(url),
    API.getPage(action.payload.url)
    .flatMap(result => (
      action.payload.url
      ? Observable.concat(
        Observable.of(push({
          pathname: action.payload.url,
          state: result.response,
        })),
      )
      : null
    ))
  )
);

export default fetchEpic;
