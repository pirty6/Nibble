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
        language: 'en',
      },
      {
        title: 'Deutsch',
        link: null,
        flag: null,
        language: 'de',
      },
    ],
    text: '“Esta obra, programa o acción es de carácter público, no es patrocinado ni promovido por partido político alguno y sus recursos provienen de los ingresos que aportan todos los contribuyentes. Está prohibido el uso de esta obra, programa o acción con fines políticos, electorales, de lucro y otros distintos a los establecidos. Quien haga uso indebido de los recursos de esta obra, programa o acción deberá ser denunciado y sancionado de acuerdo con la ley aplicable y ante la autoridad competente”.',
    bottomLinks:
    [
        {
          title:'2017. Derechos Reservados',
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
  footerEnglish: {
    contact:
    {
      title:'Contact',
      address: 'Contituyentes Av. S/N Villas del Sur 76000 Santiago de Querétaro, Qro',
      telephone: '01 442 251 9600',
    },
    upperLinks:
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
        // language: null,
      },
      {
        title: 'Español',
        link: null,
        flag: null,
        language: 'es',
      },
      {
        title: 'Deustch',
        link: null,
        flag: null,
        language: 'de',
      },
    ],
    text: '“This work, program or action is public, is not sponsored or promoted by any political party and its resources come from the income contributed by all taxpayers. It is prohibited to use this work, program or action for political, electoral, profit and other purposes other than those established. Whoever makes improper use of the resources of this work, program or action must be denounced and punished according to the applicable law and before the competent authority”.',
    bottomLinks:
    [
        {
          title:'2017. All rights reserved',
          link:null,
        },
        {
          title: 'Terms and conditions',
          link: 'terminos',
        },
        {
          title: 'Privacy',
          link: 'privacidad',
        },
        {
          title: 'Site map',
          link: 'mapa-sitio',
        },
        {
          title: 'Developers',
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
  footerGerman: {
    contact:
    {
      title:'Kontakt',
      address: 'Str Contituyentes S/N Villas del Sur 76000 Santiago de Querétaro, Qro',
      telephone: '01 442 251 9600',
    },
    upperLinks:
    [
      {
        title: 'Digitalkatalog',
        link: 'libreria',
        flag: true,
      },
      {
        title: 'Interactive Karte',
        link: 'mapa',
        flag: true,
      },
      {
        title: 'Offizielle Seite',
        link: 'http://gomezmorin.queretaro.gob.mx/',
        flag: false,
      },
      {
        title: 'English',
        link: null,
        flag: null,
        language: 'en',
      },
      {
        title: 'Español',
        link: null,
        flag: null,
        language: 'es',
      },
    ],
    text: '“Diese Arbeit, Programm oder Aktion ist öffentlich, wird nicht von einer politischen Partei gefördert oder gefördert und ihre Ressourcen kommen aus dem Einkommen, das von allen Steuerpflichtigen beigetragen wird. Es ist verboten, diese Arbeit, das Programm oder die Maßnahmen für politische, Wahl-, Gewinn- und andere Zwecke zu nutzen, außer denen, die gegründet wurden. Wer die Ressourcen dieser Arbeit, des Programms oder der Maßnahmen nicht ordnungsgemäß nutzt, muss nach dem anwendbaren Recht und vor der zuständigen Behörde gekündigt und bestraft werden”.',
    bottomLinks:
    [
        {
          title:'2017. Alle Rechte vorbehalten',
          link:null,
        },
        {
          title: 'Geschäftsbedingungen',
          link: 'terminos',
        },
        {
          title: 'Privatsphäre',
          link: 'privacidad',
        },
        {
          title: 'Kartenseite',
          link: 'mapa-sitio',
        },
        {
          title: 'Entwickler',
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
