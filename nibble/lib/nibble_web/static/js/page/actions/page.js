import {
  PAGE_FETCH,
  PAGE_FETCH_CANCEL,
  PAGE_FETCH_FAILED,
  PAGE_FETCH_SUCCESS,
} from '../constants/actionTypes';

export function cancel() {
  return {
    type: PAGE_FETCH_CANCEL,
    payload: null,
  };
}

export function fetch(url) {
  return {
    type: PAGE_FETCH,
    payload: url,
  };
}

export function finish(page) {
  return {
    type: PAGE_FETCH_SUCCESS,
    payload: page,
  };
}

export function report(message) {
  return {
    type: PAGE_FETCH_FAILED,
    payload: message,
  };
}
