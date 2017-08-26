import {
  CONTENT_SLIDE_TOGGLE,
} from '../constants/actionTypes';

export function toggle() {
  return {
    type: CONTENT_SLIDE_TOGGLE,
  };
}
