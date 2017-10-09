import {
  FOOTER_FETCH,
} from '../../constants/actionTypes';

const initialState = {
  footer: {
    contact:
    {
      title:'Contacto',
      address: 'Av. Contituyentes S/N Villas del Sur 76000 Santiago de Querétaro, Qro',
      telephone: '01 442 251 9600',
    },
    upperLinks:
    [
      {
        title: 'Catálogo Digital',
        link: 'libreria',
        flag: true,
      },
      {
        title: 'Mapa Interactivo',
        link: 'mapa',
        flag: true,
      },
      {
        title: 'Página Oficial',
        link: 'http://gomezmorin.queretaro.gob.mx/',
        flag: false,
      },
      {
        title: 'English',
        link: null,
        flag: null,
      },
    ],
    text: '“Esta obra, programa o acción es de carácter público, no es patrocinado ni promovido por partido político alguno y sus recursos provienen de los ingresos que aportan todos los contribuyentes. Está prohibido el uso de esta obra, programa o acción con fines políticos, electorales, de lucro y otros distintos a los establecidos. Quien haga uso indebido de los recursos de esta obra, programa o acción deberá ser denunciado y sancionado de acuerdo con la ley aplicable y ante la autoridad competente”.',
    bottomLinks:
    [
        {
          title:'2017.Derechos Reservados',
          link:null,
        },
        {
          title: 'Terminos y condiciones',
          link: 'terminos',
        },
        {
          title: 'Privacidad',
          link: 'privacidad',
        },
        {
          title: 'Mapa del sitio',
          link: 'mapa-sitio',
        },
        {
          title: 'Desarolladores',
          link: 'desarrolladores',
        },
    ],
    icons:
    [
        {
          icon: '/images/002-social.svg',
          link: 'https://www.facebook.com/CECEQro',
        },
        {
          icon: '/images/004-twitter-logo-silhouette.svg',
          link: 'https://twitter.com/CECEQGomezMorin',
        },
        {
          icon: '/images/001-video.svg',
          link: 'https://www.youtube.com/channel/UCV-XD4fizSpGEIU5U9lyDAA?feature=watch',
        },
    ],
  },
};

export default function (state = initialState, action = {}) {
  switch (action.type) {
    case FOOTER_FETCH:
      return {
        ...state,
      };
    default:
      return state;
  }
}
