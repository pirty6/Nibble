import {
  TOPBAR_FETCH,
} from '../../constants/actionTypes';

const initialState = {
  links:
  [
    {
      title: 'Libreria Digital',
      link: 'libreria',
      flag: true,
    },
    {
      title: 'Mapa Interactivo',
      link: 'mapa',
      flag: true,
    },
    {
      title: 'Pagina Oficial',
      link: 'http://gomezmorin.queretaro.gob.mx/',
      flag: false,
    },
  ],
};

export default function (state = initialState, action = {}) {
  switch (action.type) {
    case TOPBAR_FETCH:
      return {
        ...state,
      };
    default:
      return state;
  }
}