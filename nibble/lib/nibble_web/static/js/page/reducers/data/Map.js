import {
  MAP_FETCH,
  MAP_FETCH_FAILED,
  MAP_FETCH_SUCCESS,
  MAP_FETCH_CANCEL,
} from '../../constants/actionTypes';

const initialState = {
  header: {
    title: 'Mapa Interactivo',
    subtitle: 'Some really cool text about how cool it is',
    image: {
      desktop: null,
    },
  },
  headerGerman: {
    title: 'Interactive Karte',
    subtitle: 'Some really cool text about how cool it is',
    image: {
      desktop: null,
    },
  },
  headerEnglish: {
    title: 'Interactive Map',
    subtitle: 'Some really cool text about how cool it is',
    image: {
      desktop: null,
    },
  },
  button: 'Ver segundo piso',
  buttonEnglish: 'See second floor',
  buttonGerman: 'Siehe zweiten Stock',
  buttonGermanFirst: 'Siehe erste Stock',
  buttonEnglishFirst: 'See first floor',
  buttonFirst: 'Ver primer piso',
};

export default function (state = initialState, action = {}) {
  switch (action.type) {
    case MAP_FETCH:
      return {
        ...state,
      };
    case MAP_FETCH_FAILED:
      return {
        ...state,
      };
    case MAP_FETCH_SUCCESS:
      return {
        ...state,
      };
    case MAP_FETCH_CANCEL:
      return {
        ...state,
      };
    default:
      return state;
  }
}
