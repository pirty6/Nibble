import {
  CONTENT_SLIDE_TOGGLE,
} from '../../constants/actionTypes';

const initialState = {
  slide: false,
};

export default function (state = initialState, action = {}) {
  switch (action.type) {
    case CONTENT_SLIDE_TOGGLE:
      return {
        slide: !state.slide,
      };
    default:
      return {
        ...state,
      };
  }
}
