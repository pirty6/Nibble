import {
  SITE_ID,
} from '../../constants/actionTypes';

const initialState = {
  id: null,
};

export default function (state = initialState, action = {}) {
  switch (action.type) {
    case SITE_ID:
      return {
        ...state,
        id: action.payload,
      };

    default:
      return {
        ...state,
      };
  }
}
