import {
  MODAL_TOGGLE,
} from '../../constants/actionTypes';

const initialState = {
  toggle: false,
};

export default function (state = initialState, action = {}) {
  switch (action.type) {
    case MODAL_TOGGLE:
      return {
        toggle: !state.toggle,
      };
    default:
      return {
        ...state,
      };
  }
}
