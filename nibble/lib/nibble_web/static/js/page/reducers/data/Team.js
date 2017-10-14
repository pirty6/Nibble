import {
  TEAM_FETCH,
} from '../../constants/actionTypes';

const initialState = {
  title: 'Nosotros somos',
  team: [
    {
      name: 'Mariana Pérez',
      links: [
        {
          icon: '/images/facebook.svg',
          link: 'https://www.facebook.com/mariana.pg.526',
        },
        {
          icon: '/images/linkedin.svg',
          link: 'https://www.linkedin.com/in/marianapg5/',
        },
      ],
      image: 'https://images.unsplash.com/photo-1504884790557-80daa3a9e621?dpr=1&auto=compress,format&fit=crop&w=334&h=&q=80&cs=tinysrgb&crop=',
      imageHover: 'https://images.unsplash.com/photo-1502232067273-9baec0dfaf23?dpr=1&auto=compress,format&fit=crop&w=376&h=&q=80&cs=tinysrgb&crop=',
    },
    {
      name: 'David Ramírez',
      links: [
        {
          icon: '/images/facebook.svg',
          link: 'https://www.facebook.com/mariana.pg.526',
        },
        {
          icon: '/images/linkedin.svg',
          link: 'https://www.linkedin.com/in/marianapg5/',
        },
      ],
        image: 'https://images.unsplash.com/photo-1503430935654-c3847b9289eb?dpr=1&auto=compress,format&fit=crop&w=368&h=&q=80&cs=tinysrgb&crop=',
        imageHover: 'https://images.unsplash.com/photo-1505962758314-85bfe836a5b9?dpr=1&auto=compress,format&fit=crop&w=334&h=&q=80&cs=tinysrgb&crop=',
    },
    {
      name: 'Manuel Flores',
      links: [
        {
          icon: '/images/facebook.svg',
          link: 'https://www.facebook.com/mariana.pg.526',
        },
        {
          icon: '/images/linkedin.svg',
          link: 'https://www.linkedin.com/in/marianapg5/',
        },
      ],
        image: 'https://images.unsplash.com/photo-1505150892987-424388901632?dpr=1&auto=compress,format&fit=crop&w=334&h=&q=80&cs=tinysrgb&crop=',
        imageHover: 'https://images.unsplash.com/photo-1505962758314-85bfe836a5b9?dpr=1&auto=compress,format&fit=crop&w=334&h=&q=80&cs=tinysrgb&crop=',
    },
    {
      name: 'Filiberto Vázquez',
      links: [
        {
          icon: '/images/facebook.svg',
          link: 'https://www.facebook.com/mariana.pg.526',
        },
        {
          icon: '/images/linkedin.svg',
          link: 'https://www.linkedin.com/in/marianapg5/',
        },
      ],
        image: 'https://images.unsplash.com/photo-1500428596937-31f16f2210fe?dpr=1&auto=compress,format&fit=crop&w=400&h=&q=80&cs=tinysrgb&crop=',
        imageHover: 'https://images.unsplash.com/photo-1505962758314-85bfe836a5b9?dpr=1&auto=compress,format&fit=crop&w=334&h=&q=80&cs=tinysrgb&crop=',
    },
  ],
};

export default function (state = initialState, action = {}) {
  switch (action.type) {
    case TEAM_FETCH:
      return {
        ...state,
      };
    default:
      return state;
  }
}
