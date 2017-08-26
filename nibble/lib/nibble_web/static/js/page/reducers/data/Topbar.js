import {
  TOPBAR_FETCH,
} from '../../constants/actionTypes';

const initialState = {
  links:
  [
    {
      title: 'Libreria Digital',
      link: 'libreria',
    },
    {
      title: 'Mapa Interactivo',
      link: 'mapa',
    },
    {
      title: 'Pagina Oficial',
      link: 'http://gomezmorin.queretaro.gob.mx/',
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
