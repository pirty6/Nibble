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
  sites:
  [
    {
      sector:
      [
        {
          id: 1,
          title: 'Biblioteca',
          imageVr: '/images/Venice.jpg',
          image: '/images/library.jpg',
          information: 'The library is a really cool place to chill and read some awesome books. There is a lot of books that are available to all the public that wants to read them and learn something really cool they didnt know.',
        },
        {
          id: 2,
          title: 'Bebeteca',
          imageVr: '/images/Prueba.jpg',
          image: '/images/baby.jpg',
          information: 'The library is a really cool place to chill and read some awesome books. There is a lot of books that are available to all the public that wants to read them and learn something really cool they didnt know.',
        },
      ],
    },
  ],
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
