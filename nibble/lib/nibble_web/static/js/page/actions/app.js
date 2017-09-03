import {
  CONTENT_SLIDE_TOGGLE,
  MODAL_TOGGLE,
  SITE_ID,
} from '../constants/actionTypes';

export function toggle() {
  return {
    type: CONTENT_SLIDE_TOGGLE,
  };
}

export function toggleModal() {
  return {
    type: MODAL_TOGGLE,
  };
}

export function setId(id) {
  return {
    type: SITE_ID,
    payload: id,
  };
}
