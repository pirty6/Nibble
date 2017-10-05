import {
  TOPBAR_FETCH,
} from '../../constants/actionTypes';

const initialState = {
  logo: '/images/logo.svg',
  name: '/images/ceceq.svg',
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
      // link: 'http://gomezmorin.queretaro.gob.mx/',
      link: 'page',
      flag: true,
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
