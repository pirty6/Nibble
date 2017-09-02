import {
  CONTENT_SLIDE_TOGGLE,
  MODAL_TOGGLE,
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
