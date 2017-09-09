import {
  HERO_FETCH,
} from '../../constants/actionTypes';

const initialState = {
  hero: {
    title: 'Manuel Gómez Morín',
    subtitle: 'Centro Educativo y Cultural del Estado de Querétaro',
    image: {
      desktop: '/images/reading.png',
    },
    logos: {
      desktop: '/images/logos.jpg',
    },
  },
};

export default function (state = initialState, action = {}) {
  switch (action.type) {
    case HERO_FETCH:
      return {
        ...state,
      };
    default:
      return state;
  }
}
