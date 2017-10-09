import {
  LIBRARY_FETCH,
  LIBRARY_FETCH_FAILED,
  LIBRARY_FETCH_SUCCESS,
  LIBRARY_FETCH_CANCEL,
} from '../../constants/actionTypes';

const initialState = {
  header: {
      title: 'Catálogo Digital',
      subtitle: 'Some really cool text about how cool it is',
      image: {
        desktop: '/images/book-1200.jpg',
      },
    },
    headerEnglish: {
        title: 'Digital Catalog',
        subtitle: 'Some really cool text about how cool it is',
        image: {
          desktop: '/images/book-1200.jpg',
        },
      },
};

export default function (state = initialState, action = {}) {
  switch (action.type) {
    case LIBRARY_FETCH:
      return {
        ...state,
      };
    case LIBRARY_FETCH_FAILED:
      return {
        ...state,
      };
    case LIBRARY_FETCH_CANCEL:
      return {
        ...state,
      };
    case LIBRARY_FETCH_SUCCESS:
      return {
        ...state,
      };
    default:
      return state;
  }
}
