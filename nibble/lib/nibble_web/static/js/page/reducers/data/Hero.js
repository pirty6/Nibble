import {
  HERO_FETCH,
} from '../../constants/actionTypes';

const initialState = {
  hero: {
    title: 'Manuel Gómez Morín',
    subtitle: 'Centro Educativo y Cultural del Estado de Querétaro',
    image: {
      hd: '/images/capa-13@2x.png',
      desktop: '/images/capa-13.png',
    },
    logos: {
      desktop: '/images/capa-12.jpg',
      mobile: '/images/capa-12M.jpg',
    },
  },
  heroGerman: {
    title: 'Manuel Gómez Morín',
    subtitle: 'Bildungs- und Kulturzentrum des Staates Querétaro',
    image: {
      hd: '/images/capa-13@2x.png',
      desktop: '/images/capa-13.png',
    },
    logos: {
      desktop: '/images/capa-12.jpg',
      mobile: '/images/capa-12M.jpg',
    },
  },
  heroEnglish:{
    title: 'Manuel Gomez Morin',
    subtitle: 'Educational and Cultural Center of the State of Querétaro',
    image: {
      hd: '/images/capa-13@2x.png',
      desktop: '/images/capa-13.png',
    },
    logos: {
      desktop: '/images/capa-12.jpg',
      mobile: '/images/capa-12M.jpg',
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
