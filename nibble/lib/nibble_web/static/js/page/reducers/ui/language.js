import {
  LANGUAGE,
} from '../../constants/actionTypes';

const initialState = {
  language: 'es',
};

export default function (state = initialState, action = {}) {
  switch (action.type) {
    case LANGUAGE:
      return {
        ...state,
        language: action.payload,
      };
    default:
      return {
        ...state,
      };
  }
}
