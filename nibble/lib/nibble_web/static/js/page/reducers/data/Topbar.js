import {
  TOPBAR_FETCH,
} from '../../constants/actionTypes';

const initialState = {
  logo: '/images/logo.svg',
  name: '/images/ceceq.svg',
  links:
  [
    {
      title: 'Catalogo Digital',
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
  linksEnglish:
  [
    {
      title: 'Digital Catalog',
      link: 'libreria',
      flag: true,
    },
    {
      title: 'Interactive Map',
      link: 'mapa',
      flag: true,
    },
    {
      title: 'Official Page',
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
