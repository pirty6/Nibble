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
      desktop: '/images/book-1200.jpg',
    },
  },
  sites:
  [
    {
      title: 'Biblioteca',
      image: '/images/Venice.jpg',
      information: 'The library is a really cool place to chill and read some awesome books. There is a lot of books that are available to all the public that wants to read them and learn something really cool they didnt know.',
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